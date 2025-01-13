
const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			contacts: [],
			currentName: ""
		},
		actions: {
			getOrFetchContacts: async (agendaName) => {
				try {
					const response0 = await fetch("https://playground.4geeks.com/contact/agendas");
					if (!response0.ok) {
						throw new Error("Error al obtener agendas");
					}
			
					const data0 = await response0.json();
					const userExist = data0.agendas.find(item => item.slug === agendaName);
			
					if (!userExist) {
						const newResponse = await fetch(`https://playground.4geeks.com/contact/agendas/${agendaName}`, {
							method: "POST",
							headers: {
								'Content-Type': 'application/json'
							},
						});
						if (!newResponse.ok) {
							throw new Error("Error al crear agenda");
						}
					}
			
					const response = await fetch(`https://playground.4geeks.com/contact/agendas/${agendaName}/contacts`);
					if (!response.ok) {
						throw new Error("Error al obtener contactos");
					}
			
					const data = await response.json();
					const store = getStore();
					setStore({ ...store, contacts: data.contacts });
				} catch (error) {
					console.error("Error en getOrFetchContacts:", error);
				}
			},
			
			setCurrentName: (actualName) => {
				const store= getStore();
				setStore({...store, currentName:actualName});
			},

			addContact: async (contact) => {
				try {
					const store = getStore();
					const response = await fetch(`https://playground.4geeks.com/contact/agendas/alipcontacts`, {
						method: "POST",
						headers: { "Content-Type": "application/json" },
						body: JSON.stringify(contact),
					});
			
					if (!response.ok) {
						throw new Error("Error al agregar contacto");
					}
			
					const data = await response.json();
			
					if (data.id) {
						return true;
					} else {
						return false;
					}
				} catch (error) {
					console.error("Error al agregar contacto:", error);
				}
			},
			

			deleteContact: async (id) => {
                try {
                    const response = await fetch(
                        `https://playground.4geeks.com/contact/agendas/alip/contacts/${id}`,
                        {
                            method: "DELETE",
                        }
                    );
                    if (!response.ok) {
                        throw new Error("No se pudo eliminar el contacto.");
                    }
                    const store = getStore();
                    const updatedContacts = store.contactList.filter((contact) => contact.id !== id);
                    setStore({ ...store, contacts: updatedContacts });
                } catch (error) {
                    console.error("Error eliminando el contacto:", error);
                }
            },
		},
	};
};

export default getState;
