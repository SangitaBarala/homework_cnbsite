import HomeIcon from '@material-ui/icons/Home'
import LocalShipping from '@material-ui/icons/LocalShipping';
import CheckCircle from '@material-ui/icons/CheckCircleOutline';
import CancelIcon from '@material-ui/icons/Cancel';
import AllProducts from '@material-ui/icons/AllInbox';
import UpdateIcon from '@material-ui/icons/SystemUpdateAlt';
import GoToApp from '@material-ui/icons/ExitToApp';

export const sidebarData = [
    {
        title:'Open Orders',
        icon:<HomeIcon/>,
        link:'/openOrders'
    },
    {
        title:'Shipped Orders',
        icon:<LocalShipping/>,
        link:'/shippedOrders'
    },
    {
        title:'Closed Orders',
        icon:<CheckCircle/>,
        link:'/closedOrders'
    },
    {
        title:'Cancelled Orders',
        icon:<CancelIcon/>,
        link:'/cancelledOrders'
    },
    {
        title:'All Orders',
        icon:<AllProducts/>,
        link:'/allProducts'
    },
    {
        title:'Update Bulk Price',
        icon:<UpdateIcon/>,
        link:'/updatePrice'
    },{
        title:'Go to Vendor',
        icon:<GoToApp/>,
        link:'/gotoVendor'
    },
]