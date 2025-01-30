import { create } from "zustand";

const clients = [
  {
    id: 1,
    name: "Alice Johnson",
    email: "alice.johnson@gmail.com",
    job: "Software Developer",
    rate: 52,
    status: "active",
  },
  {
    id: 2,
    name: "Bob Williams",
    email: "bob.williams@yahoo.com",
    job: "Graphic Designer",
    rate: 45,
    status: "inactive",
  },
  {
    id: 3,
    name: "Charlie Smith",
    email: "charlie.smith@outlook.com",
    job: "Data Analyst",
    rate: 60,
    status: "active",
  },
  {
    id: 4,
    name: "Diana Lopez",
    email: "diana.lopez@company.com",
    job: "Marketing Manager",
    rate: 55,
    status: "inactive",
  },
];

const defaultClient = {
  id: null,
  name: "",
  email: "",
  job: "",
  rate: 0,
  status: "active",
};

export const useStore = create((set) => ({
  clients,
  currentClient: { ...defaultClient },
  isModalOpen: false,
  editMode: false,
  searchQuery: "",
  
  setSearchQuery: (query) => set({ searchQuery: query }),
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
