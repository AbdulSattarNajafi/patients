import Login from "./../screens/Login";
import SignUp from "./../screens/SignUp";
import SignUpCompany from "./../screens/SignUpCompany";
import Home from "./../screens/Home";
import Companies from "./../screens/Companies";
import Patients from "./../screens/Patients";
import Story from "./../screens/Story";
import Contact from "./../screens/Contact";

const routes = [
  {
    path: "/",
    name: "Login",
    component: Login,
  },
  {
    path: "login",
    name: "Login",
    component: Login,
  },
  {
    path: "signup",
    name: "Signup",
    component: SignUp,
  },
  {
    path: "signupascompany",
    name: "SignupCompany",
    component: SignUpCompany,
  },
  {
    path: "home",
    name: "Home",
    component: Home,
  },
  {
    path: "companies",
    name: "Companies",
    component: Companies,
  },
  {
    path: "patients",
    name: "Patients",
    component: Patients,
  },
  {
    path: "story",
    name: "Story",
    component: Story,
  },
  {
    path: "contact",
    name: "Contact",
    component: Contact,
  },
];

export default routes;
