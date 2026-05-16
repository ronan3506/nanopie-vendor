import { createBrowserRouter } from "react-router";
import { OnboardingScreen } from "./screens/OnboardingScreen";
import { LoginScreen } from "./screens/LoginScreen";
import { RegistrationScreen } from "./screens/RegistrationScreen";
import { DashboardScreen } from "./screens/DashboardScreen";
import { CreateRequestScreen } from "./screens/CreateRequestScreen";
import { ActiveFundingScreen } from "./screens/ActiveFundingScreen";
import { UpdatesScreen } from "./screens/UpdatesScreen";
import { RevenueScreen } from "./screens/RevenueScreen";
import { ReturnsScreen } from "./screens/ReturnsScreen";
import { ProfileScreen } from "./screens/ProfileScreen";
import { SettingsScreen } from "./screens/SettingsScreen";
import { SupportScreen } from "./screens/SupportScreen";
import { EditProfileScreen } from "./screens/EditProfileScreen";
import { BankAccountsScreen } from "./screens/BankAccountsScreen";
import { KycScreen } from "./screens/KycScreen";
import { InvestorsScreen } from "./screens/InvestorsScreen";


export const router = createBrowserRouter([
  {
    path: "/",
    Component: OnboardingScreen,
  },
  {
    path: "/login",
    Component: LoginScreen,
  },
  {
    path: "/register",
    Component: RegistrationScreen,
  },
  {
    path: "/dashboard",
    Component: DashboardScreen,
  },
  {
    path: "/create-request",
    Component: CreateRequestScreen,
  },
  {
    path: "/active-funding",
    Component: ActiveFundingScreen,
  },
  {
    path: "/updates",
    Component: UpdatesScreen,
  },
  {
    path: "/revenue",
    Component: RevenueScreen,
  },
  {
    path: "/returns",
    Component: ReturnsScreen,
  },
  {
    path: "/profile",
    Component: ProfileScreen,
  },
  {
    path: "/settings",
    Component: SettingsScreen,
  },
  {
    path: "/support",
    Component: SupportScreen,
  },
  {
    path: "/edit-profile",
    Component: EditProfileScreen,
  },
  {
    path: "/bank-accounts",
    Component: BankAccountsScreen,
  },
  {
    path: "/kyc",
    Component: KycScreen,
  },
  {
    path: "/investors",
    Component: InvestorsScreen,
  },

]);
