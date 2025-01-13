
const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			contacts: [],
			currentName: ""
		},
		actions: {
			getContacts: async (nameAgenda) => {
				try {

					const response0 = await fetch("https://playground.4geeks.com/contact/agendas")
					if (!response0.ok) {
						throw new Error("No sirvió", response0)
					}
					const data0 = await response0.json();
					const userExist = data0.agendas.find(item => item.slug === nameAgenda)
					if (!userExist) {
						const newResponse = await fetch(`https://playground.4geeks.com/contact/agendas/${nameAgenda}`, {
							method: "POST",
							headers: {
								'Content-Type': 'application/json'
							},
						});
						if (!newResponse.ok) {
							throw new Error("Algo salio mal")
						}
					}
					const response = await fetch(`https://playground.4geeks.com/contact/agendas/${nameAgenda}/contacts`)
					if (!response.ok) {
						throw new Error("Algo salio mal")
					}

					const data = await response.json();

					const store = getStore();
					setStore({ ...store, contacts: data.contacts })
				} catch (error) {
					console.error(error);

				}
			},

			setCurrentName: (actualName) => {
				const store= getStore();
				setStore({...store, currentName:actualName});
			},

			addContact: async (contact) => {
				try {
					let store= getStore();
					const response = await fetch(`https://playground.4geeks.com/contact/agendas/${store.currentName}/contacts`, {
						method: "POST",
						headers: { "Content-Type": "application/json" },
						body: JSON.stringify(contact),
					});
					if (!response.ok) {
						throw new Error("Algo salio mal")
					}
					let data= await response.json();

					if (data.id){
						return true;
					} else{
						return false;
					}
				} catch (error) {
					console.error("error al agregar contacto");
				}
			},

			deleteContact: async () => {
				try {
					const response = await fetch(`https://playground.4geeks.com/contact/agendas/${currentName}/contacts/${contact.id}`, {
						method: "DELETE",
					});
					if (response.ok) {
						getActions().fetchContacts();
					}
				} catch (error) {
					console.error("Error al elimanar contacto");
				}
			},
		},
	};
};

export default getState;
