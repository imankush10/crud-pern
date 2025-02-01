import { create } from "zustand";
import axios from "axios";

const defaultClient = {
  id: null,
  name: "",
  email: "",
  job: "",
  rate: 0,
  status: "ACTIVE",
};

export const useStore = create((set) => ({
  clients: [],

  searchQuery: "",
  setSearchQuery: (query) => set({ searchQuery: query }),

  editMode: false,
  isModalOpen: false,

  toggleModal: (id) =>
    set((state) => {
      if (id) {
        const client = state.clients.find((element) => element.id == id);
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

  currentClient: { ...defaultClient },
  updateCurrentClient: (key, value) => {
    set((state) => ({
      currentClient: { ...state.currentClient, [key]: value },
    }));
  },

  fetchClients: async () => {
    try {
      const res = await axios.get("http://localhost:3000/api/clients");
      set({ clients: res.data });
    } catch (err) {
      console.log(err);
    }
  },

  addClient: async () => {
    const { currentClient, fetchClients } = useStore.getState();
    try {
      await axios.post("http://localhost:3000/api/clients/add", currentClient);
      await fetchClients();
      set({
        currentClient: { ...defaultClient },
        isModalOpen: false,
      });
    } catch (err) {
      console.log(err);
    }
  },

  updateClient: async () => {
    const { currentClient, fetchClients } = useStore.getState();
    await axios.put("http://localhost:3000/api/clients/update", currentClient);

    await fetchClients();

    set({
      currentClient: { ...defaultClient },
      isModalOpen: false,
    });
  },
  removeClient: async (id) => {
    const { fetchClients } = useStore.getState();
    await axios.delete("http://localhost:3000/api/clients/delete", {
      headers: {
        id,
      },
    });

    await fetchClients();

    set({
      currentClient: { ...defaultClient },
      isModalOpen: false,
    });
  },
}));
