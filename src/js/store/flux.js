const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			contacts: [
				{
					name: "FIRST",
					email: "first@example.com",
					phone: "09990683508",
					address: "123 Main St"
				},
				{
					name: "SECOND",
					email: "second@example.com",
					phone: "09990683509",
					address: "456 Elm St"
				}
			]
			
		},
		actions: {
				createUser: async () =>{
					fetch ("https://playground.4geeks.com/contact/agendas/4geeks-user",{
						method: "POST"

					})
				}

			}
		}
	};
};

export default getState;
