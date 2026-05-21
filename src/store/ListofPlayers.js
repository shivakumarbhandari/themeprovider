import { create } from "zustand";

export const useListofPlayers = create((set) => ({
    players: [ "John", "Jane", "Doe" ],
    getPlayers: () => state.players,
}));