import {render, screen} from "@testing-library/react";
import App from "./App";
import userEvent from "@testing-library/user-event";
import { setupServer } from "msw/node";
import { rest } from "msw";


const server = setupServer(
    rest.post("/api/1.0/users/token/:token", (req, res, ctx) => {
        return res(ctx.status(200));
    })
);
    
beforeEach(() => {
  server.resetHandlers();
})

beforeAll(() => server.listen());

afterAll(() => server.close());

describe("Routing", () => {

    const setup = (path) => {
        window.history.pushState({},'',path);
        render(<App/>);
    }

    it.each`
        path                | pageTestId
        ${'/'}              | ${'home-page'}
        ${'/signup'}        | ${'signup-page'}
        ${'/login'}         | ${'login-page'}
        ${'/user/1'}        | ${'user-page'}
        ${'/user/2'}        | ${'user-page'}
        ${'/activate/123'}  | ${'activation-page'}
        ${'/activate/456'}  | ${'activation-page'}
    `('displays $pageTestId when path is $path', ({path, pageTestId}) => {
        setup(path);
        const page = screen.queryByTestId(pageTestId);
        expect(page).toBeInTheDocument();
    });

    it.each`
        path | pageTestId
        ${'/'} | ${'signup-page'}
        ${'/'} | ${'login-page'}
        ${'/'} | ${'user-page'}
        ${'/'} | ${'activation-page'}
        ${'/signup'} | ${'home-page'}
        ${'/signup'} | ${'login-page'}
        ${'/signup'} | ${'user-page'}
        ${'/signup'} | ${'activation-page'}
        ${'/login'}  | ${'home-page'}
        ${'/login'}  | ${'signup-page'}
        ${'/login'}  | ${'user-page'}
        ${'/login'}  | ${'activation-page'}
        ${'/user/1'} | ${'home-page'}
        ${'/user/1'} | ${'signup-page'}
        ${'/user/1'} | ${'login-page'}
        ${'/user/1'} | ${'activation-page'}
        ${'/activate/123'} | ${'signup-page'}
        ${'/activate/123'} | ${'login-page'}
        ${'/activate/123'} | ${'user-page'} 
        ${'/activate/123'} | ${'home-page'}

    `(
        'does not display $pageTestId when path is $path',
        ({path, pageTestId}) => {
            setup(path);
            const page = screen.queryByTestId(pageTestId);
            expect(page).not.toBeInTheDocument();
        }
    )

    it.each`
    targetPage
    ${'Home'}
    ${'Sign Up'}
    ${'Login'}
    `("has link to $targetPage on Navbar", ({targetPage}) => {
        setup("/");
        const link = screen.getByRole("link", {name: targetPage})
        expect(link).toBeInTheDocument();
    })

    it.each`
        initialPath | clickingTo   | visiblePage
        ${'/'}      | ${'Sign Up'} | ${'form-sign-up'}
        ${'/signup'}| ${'Home'} | ${'home-page'}  
        ${'/signup'}| ${'Login'}| ${'login-page'} 


    `("displays $visiblePage after clicking $clickingTo", async ({initialPath, clickingTo, visiblePage}) => {
        setup(initialPath);
        const link = screen.getByRole('link', {name: clickingTo});
        await userEvent.click(link);
        expect(screen.getByTestId(visiblePage)).toBeInTheDocument();
    })

    it("displays home page when clicking brand logo", async () => {
        setup("/login");
        const logo = screen.queryByAltText("Hoaxify");
        await userEvent.click(logo);
        expect(screen.getByTestId("home-page")).toBeInTheDocument();
    })



    // it("displays homepage at /", () => {
    //     render(<App/>);
    //     const homePage = screen.queryByTestId("home-page");
    //     expect(homePage).toBeInTheDocument();
    // })
    // it("does not display SignUpPage when at /", () => {
    //     window.history.pushState({}, "", "/");
    //     render(<App/>);
    //     const page = screen.queryByTestId("signup-page");
    //     expect(page).not.toBeInTheDocument();
    // })
    // it("does not display user page when at /", () => {
    //     window.history.pushState({}, "", "/");
    //     render(<App/>);
    //     const userPage = screen.queryByTestId("user-page");
    //     expect(userPage).not.toBeInTheDocument();
    // })
    // it("displays signup page at /signup", () => {
    //     window.history.pushState({}, "", "/signup");
    //     render(<App/>);
    //     const page = screen.queryByTestId("signup-page");
    //     expect(page).toBeInTheDocument();
    // })
    // it("does not display HomePage when at /signup", () => {
    //     window.history.pushState({}, "", "/signup");
    //     render(<App/>);
    //     const page = screen.queryByTestId('home-page');
    //     expect(page).not.toBeInTheDocument();
    // })
    // it("does not display login when at /signup", () => {
    //     window.history.pushState({}, "", "/signup");
    //     render(<App/>);
    //     const loginPage = screen.queryByTestId('login-page');
    //     expect(loginPage).not.toBeInTheDocument();
    // })
    // it("does not display user page when at /signup", () => {
    //     window.history.pushState({}, "", "/signup");
    //     render(<App/>);
    //     const userPage = screen.queryByTestId("/user/");
    //     expect(userPage).not.toBeInTheDocument();
    // })
    // it("displays login page when at /login", () => {
    //     window.history.pushState({}, "", "/login");
    //     render(<App/>);
    //     const loginpage = screen.queryByTestId('login-page');
    //     expect(loginpage).toBeInTheDocument();
    // })
    // it("does not display signup page when at /login", () => {
    //     window.history.pushState({}, "", "/login");
    //     render(<App/>);
    //     const signUpPage = screen.queryByTestId('signup-page');
    //     expect(signUpPage).not.toBeInTheDocument();
    // })
    // it("does not display / page when at /login", () => {
    //     window.history.pushState({}, "", "/login");
    //     render(<App/>);
    //     const homePage = screen.queryByTestId("home-page");
    //     expect(homePage).not.toBeInTheDocument();
    // })
    // it("does not display user page when at /login", () => {
    //     window.history.pushState({}, "", "/login");
    //     render(<App/>);
    //     const loginPage = screen.queryByTestId("/user/");
    //     expect(loginPage).not.toBeInTheDocument();
    // })
    // it("does display user page when at /user/", () => {
    //     window.history.pushState({}, "", "/user/");
    //     render(<App/>)
    //     const userPage = screen.queryByTestId("user-page");
    //     expect(userPage).toBeInTheDocument();
    // })
    // it("has link to homepage on Navbar", () => {
        
    // })
   
});

console.error = () => {};