# (Assignment 6) Project Name: PC Builder

- github link: [https://github.com/JannatBorna/pc-builder-assignment6-nextjs]

- live link: []

- This is PC parts and components using the Next.js project and In this project PC has been worked with some components. The ingredients are:

                - CPU / Processor
                - Motherboard
                - RAM
                - Power Supply Unit
                - Storage Device
                - Monitor
                - Others (etc)

- Nabhav has PC Builder, Categories, login button.

- The following categories also have category dropdowns,

            - CPU/Processor
            - motherboard
            - ram
            - Power supply unit
            - storage device
            - Monitor
            - other
- Clicking on these elements will take you to their specific routes and And all of them also have details page which will show the details of the cart that is clicked

- 6 component home page is shown, similarly clicking on see details button will take you to the component details page. There are also banner pages that will display the home page and There are headers and footers that all routes will have.

- If you go to the details page, there will be the image, name, rating, price, category, description,Status, features, etc. of the components.

- The PC Builder page is a private route only logged in users can access this route. Used NextAuth with a social login (Github) provider to enable user authentication.

- The PC Builder page contains CPU/Processor, Motherboard, RAM, Power Supply, Unit, Storage Device, Monitor and each section has a Choose button. Clicking on the Choose button will take the user to another page where at least 3 items of that particular category will be displayed. Each element of this page will display cards - image, product name, category, price, status, rating. Each component card on that page has an Add to Builder button. Clicking this button will redirect the user to the PC Builder page, and it will update the status of the selected category category on the PC Builder page with the selected component below. After adding 5 components the user will be able to click on the complete build button and this button will be disabled if the user does not add at least 5 of the mentioned components.
