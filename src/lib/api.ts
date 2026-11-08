/**
 * apiClient — capa base para hablar con el backend NestJS
 * Usa fetch nativo, sin librerías raras. Didáctico y tipado.
 * Env: NEXT_PUBLIC_API_URL (http://localhost:3000 por defecto)
 *
 * IMPORTANTE: Next.js "congela" NEXT_PUBLIC_API_URL en el JavaScript del
 * navegador durante `next build`. En Vercel hay que definir la variable
 * ANTES de desplegar (o redesplegar después de añadirla).
 */

const DEFAULT_API_URL = "http://localhost:3000";
// Se referencia literalmente process.env.NEXT_PUBLIC_API_URL para que Next la sustituya en el build.
const CONFIGURED_API_URL = (process.env.NEXT_PUBLIC_API_URL ?? "").trim();
const API_URL_IS_DEFAULT = CONFIGURED_API_URL === "";
// Sin barras finales: evita URLs tipo https://api.com//users
const API_URL = (API_URL_IS_DEFAULT ? DEFAULT_API_URL : CONFIGURED_API_URL).replace(/\/+$/, "");

export class ApiError extends Error {
  public status: number;
  public data: unknown;
  constructor(status: number, data: unknown) {
    const msg =
      typeof data === "object" && data !== null && "message" in data
        ? Array.isArray((data as { message: unknown }).message)
          ? ((data as { message: string[] }).message).join(", ")
          : String((data as { message: unknown }).message)
        : `Error ${status}`;
    super(msg);
    this.status = status;
    this.data = data;
  }
}

type Params = Record<string, string | number | undefined>;

function buildUrl(path: string, params?: Params) {
  let url: URL;
  try {
    url = new URL(`${API_URL}${path}`);
  } catch {
    // Típico cuando NEXT_PUBLIC_API_URL no lleva protocolo (mi-backend.com en vez de https://mi-backend.com)
    throw new ApiError(0, {
      message: `NEXT_PUBLIC_API_URL no es una URL válida ("${API_URL}"). Debe incluir el protocolo, por ejemplo https://mi-backend.com`,
    });
  }
  if (params) {
    Object.entries(params).forEach(([k, v]) => {
      if (v !== undefined && v !== "") url.searchParams.set(k, String(v));
    });
  }
  return url.toString();
}

/**
 * Mensaje comprensible cuando fetch() ni siquiera recibe respuesta (error de red).
 * Ojo: el navegador NO distingue CORS de "servidor caído" — ambos llegan como "Failed to fetch".
 */
function describeNetworkFailure(url: string): string {
  const inBrowser = typeof window !== "undefined";
  const pageHost = inBrowser ? window.location.hostname : "";
  const pageIsLocal = pageHost === "localhost" || pageHost === "127.0.0.1" || pageHost === "";

  if (inBrowser && API_URL_IS_DEFAULT && !pageIsLocal) {
    return `Este despliegue no tiene configurada NEXT_PUBLIC_API_URL: el navegador intenta llamar a ${DEFAULT_API_URL}, que es tu propio equipo y no el backend. Define la variable en Vercel y vuelve a desplegar`;
  }
  if (inBrowser && window.location.protocol === "https:" && url.startsWith("http://") && !/^http:\/\/(localhost|127\.0\.0\.1)/.test(url)) {
    return `La página usa HTTPS pero el backend (${API_URL}) usa HTTP, y el navegador bloquea esa petición (contenido mixto). El backend debe publicarse con HTTPS`;
  }
  return `No se pudo conectar con el backend en ${API_URL}. Causas posibles: backend apagado, URL incorrecta o CORS sin permitir el origen de este sitio`;
}

async function request(path: string, init?: RequestInit, params?: Params): Promise<Response> {
  const url = buildUrl(path, params);
  let res: Response;
  try {
    res = await fetch(url, init);
  } catch {
    throw new ApiError(0, { message: describeNetworkFailure(url) });
  }
  if (!res.ok) throw new ApiError(res.status, await res.json().catch(() => ({ message: res.statusText })));
  return res;
}

const JSON_HEADERS = { "Content-Type": "application/json" };

export const apiClient = {
  async get<T>(path: string, params?: Params): Promise<T> {
    const res = await request(path, { cache: "no-store" }, params);
    return res.json();
  },
  async post<T>(path: string, data: unknown): Promise<T> {
    const res = await request(path, { method: "POST", headers: JSON_HEADERS, body: JSON.stringify(data) });
    return res.json();
  },
  async put<T>(path: string, data: unknown): Promise<T> {
    const res = await request(path, { method: "PUT", headers: JSON_HEADERS, body: JSON.stringify(data) });
    return res.json();
  },
  async delete<T>(path: string): Promise<T> {
    const res = await request(path, { method: "DELETE" });
    return res.json().catch(() => undefined as T);
  },
};

export { API_URL };
