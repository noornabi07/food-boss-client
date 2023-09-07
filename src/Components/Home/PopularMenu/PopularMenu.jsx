import SectionTitle from '../../SectionTitle/SectionTitle';
import MenuItem from '../../Shared/MenuItem/MenuItem';
import useMenu from '../../../Hooks/UseMenu';

const PopularMenu = () => {
    const [menu] = useMenu();
    const popular = menu.filter(item => item.category === "popular");

    return (
        <section>
            <SectionTitle heading="From Our Menu" subHeading="Popular menu check it"></SectionTitle>
            <div className='grid md:grid-cols-2 gap-6'>
                {
                    popular.map(item => <MenuItem key={item._id} item={item}></MenuItem>)
                }
            </div>
            <div className='text-center'>
                <button className='py-4 px-8 font-bold border-b-4 border-slate-900 shadow-2xl rounded-xl hover:bg-slate-900 hover:text-white mt-5'>View Full Menu</button>
            </div>
        </section>
    );
};

export default PopularMenu;