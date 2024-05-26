import { Slot } from "expo-router";
import { QueryClient, QueryClientProvider } from "react-query";

const QureyClient = new QueryClient();

export default function LayoutHome() {
    return (
        <QueryClientProvider client={QureyClient}>
            <Slot />
        </QueryClientProvider>
    )
}