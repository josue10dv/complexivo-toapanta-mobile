import { http } from "./http";
import type { Paginated } from "../types/drf";
import { Order } from "../types/order";

export async function listVehiculosApi(): Promise<Paginated<Order> | Order[]> {
    const { data } = await http.get<Paginated<Order> | Order[]>("/api/orders/");
    return data;
}