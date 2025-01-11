import { Helmet } from 'react-helmet-async';
import Cover from '../../Shared/Cover/Cover';
import menuImg from '../../../assets/menu/banner3.jpg' 
import dessertImg from '../../../assets/menu/dessert-bg.jpeg'
import pizzaImg from '../../../assets/menu/pizza-bg.jpg'
import saladImg from '../../../assets/menu/salad-bg.jpg'
import soupImg from '../../../assets/menu/soup-bg.jpg'
import useMenu from '../../../hooks/useMenu';
import SectionTitle from '../../../components/SectionTitle/SectionTitle';
import MenuCategory from '../MenuCategory/MenuCategory';


const Menu = () => {
    const [menu] = useMenu();
    const dessert = menu.filter(item => item.category === 'dessert');
    const soup = menu.filter(item => item.category === 'soup');
    const salad = menu.filter(item => item.category === 'salad');
    const pizza = menu.filter(item => item.category === 'pizza');
    const offered = menu.filter(item => item.category === 'offered');

    return (
        <div>
            <Helmet>
                <title>Bistro Boss | Menu</title>
            </Helmet>
            {/* Main cover */}
            <Cover img={menuImg} title = "our menu"></Cover>
            <SectionTitle subHeading="Don't Miss" heading="Today's Offer">
            </SectionTitle>
            {/* offered menu items */}
            <MenuCategory items={offered}></MenuCategory>
            {/* desserts menu items */}
            <MenuCategory title = "dessert" img ={dessertImg} items={dessert}>
            </MenuCategory>
            {/* pizza menu items */}
            <MenuCategory title = "pizza" img ={pizzaImg} items={pizza}>
            </MenuCategory>
            {/* salad menu items */}
            <MenuCategory title = "salad" img ={saladImg} items={salad}>
            </MenuCategory>
            {/* soup menu items */}
            <MenuCategory title = "soup" img ={soupImg} items={soup}>
            </MenuCategory>
        </div>
    );
};

export default Menu;