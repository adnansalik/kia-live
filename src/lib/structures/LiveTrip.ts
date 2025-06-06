export type LiveTrip = {
    trip_id: string;
    vehicle_id: string;
    route_id: string;
    stops: {
        [stop_id: string]: string;
    }[];
    timestamp: string;
}