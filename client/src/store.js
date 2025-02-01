import { create } from "zustand";
import axios from "axios";

const defaultClient = {
  id: null,
  name: "",
  email: "",
  job: "",
  rate: 0,
  status: "true",
};

export const useStore = create((set) => ({
  clients: [],
  currentClient: { ...defaultClient },
  isModalOpen: false,
  editMode: false,
  searchQuery: "",

  setSearchQuery: (query) => set({ searchQuery: query }),

  fetchClients: async () => {
    try {
      const res = await axios.get("http://localhost:3000/api/clients");
      console.log(res.data)
      set({ clients: res.data });
    } catch (err) {
      console.log(err);
    }
  },

  toggleModal: (id) =>
    set((state) => {
      if (id) {
        const client = clients.find((element) => element.id == id);
        return {
          isModalOpen: !state.isModalOpen,
          currentClient: client,
          editMode: true,
        };
      } else
        return {
          isModalOpen: !state.isModalOpen,
          editMode: false,
          currentClient: { ...defaultClient },
        };
    }),
  updateCurrentClient: (key, value) => {
    set((state) => ({
      currentClient: { ...state.currentClient, [key]: value },
    }));
  },
  addClient: () =>
    set((state) => {
      console.log(state.currentClient);
      const newClient = {
        ...state.currentClient,
        id: state.clients.length + 1,
      };

      return {
        clients: [...state.clients, newClient],
        currentClient: { ...defaultClient },
        isModalOpen: false,
      };
    }),
  updateClient: () =>
    set((state) => {
      return {
        clients: state.clients.map((client) =>
          client.id === state.currentClient.id
            ? { ...state.currentClient }
            : client
        ),
        currentClient: { ...defaultClient },
        isModalOpen: false,
      };
    }),
  removeClient: (id) => {
    set((state) => {
      return {
        clients: state.clients.filter((client) => client.id != id),
        currentClient: { ...defaultClient },
        isModalOpen: false,
      };
    });
  },
}));
