import { ReactComponent as Eye } from 'assets/icons/eye.svg';
import { ReactComponent as Liked } from 'assets/icons/liked.svg';
import { ReactComponent as Wallet } from 'assets/icons/wallet.svg';
import { ReactComponent as Stores } from 'assets/icons/stores.svg';
import { ReactComponent as Profile } from 'assets/icons/profile.svg';
import { ReactComponent as SavedStores } from 'assets/icons/saves-stores.svg';
import { ReactComponent as OrderHistory } from 'assets/icons/order-history.svg';
import Test from 'pages/Test';
import Dashboard from 'pages/Dashboard';
export const childRoutes = [
  {
    path: '/',
    component: <Dashboard />,
    Icon: Stores,
    title: 'Stores'
  },
  {
    path: '/order-history',
    component: <Test />,
    Icon: OrderHistory,
    title: 'Order history'
  },
  {
    path: '/saved-orders',
    // component: Generic,
    Icon: SavedStores,
    title: 'Saved stores'
  },
  {
    path: '/liked-products',
    // component: Pickups,
    Icon: Liked,
    title: 'Liked products'
  },
  {
    path: '/products/view',
    // component: Generic,
    Icon: Eye,
    title: 'Viwed Products'
  },
  {
    path: '/wallet-history',
    // component: Generic,
    Icon: Wallet,
    title: 'Wallet history'
  },
  {
    path: '/profile-setting',
    // component: Generic,
    Icon: Profile,
    title: 'Profile setting'
  },
];
