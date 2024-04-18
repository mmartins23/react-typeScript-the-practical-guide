# Creating Header Component

Creating the header component involves the following steps:

1. **Defining Props Type**: First, define the type for the props that the `Header` component will receive. This is done using an interface named `HeaderProps`. In this case, the props include an `image` object with `src` and `alt` properties, as well as `children` of type `ReactNode`.

    ```typescript
    import { ReactNode } from "react";

    interface HeaderProps {
        image: {
            src: string;
            alt: string;
        };
        children: ReactNode;
    }
    ```

2. **Creating the Component**: Next, create the `Header` component function. Destructure the `image` and `children` props from the `HeaderProps` interface. Render the `<header>` element with an `<img>` tag for the header image and render the `children` prop, which represents the content inside the `Header` component.

    ```typescript
    const Header = ({ image, children }: HeaderProps) => {
        return (
            <header>
                <img src={image.src} alt={image.alt}/>
                {children}
            </header>
        );
    };
    ```

3. **Exporting the Component**: Export the `Header` component so it can be imported and used in other parts of the application.

    ```typescript
    export default Header;
    ```

4. **Using the Component**: In the parent component (`App` in this case), import the `Header` component and use it within the JSX markup. Provide the required props, such as the `image` object and any content to be rendered inside the `Header`.

    ```typescript
    import Header from './components/Header';
    import goalsImg from './components/download.png';

    function App() {
        return (
            <main>
                <Header image={{ src: goalsImg, alt: 'A list of goals' }}>
                    <h1>Your Course Goals</h1>
                </Header>
                {/* Additional content goes here */}
            </main>
        );
    }

    export default App;
    ```

By following these steps, you've successfully created the `Header` component, defined its props type, implemented its functionality, and integrated it into the `App` component.