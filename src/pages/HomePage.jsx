import { useEffect, useState } from "react";
import Card from "../components/utils/Card";
import { Plus } from 'lucide-react';


const Home = () => {
  const [menuItems, setMenuItems] = useState([]);
  const getMenu = async () => {
  try {
    const res = await fetch(
      "https://raw.githubusercontent.com/saksham-accio/f2_contest_3/main/food.json"
    );
    const data = await res.json();
    return data;
  } catch (error) {
    console.error("Error fetching menu:", error);
    return []; 
  }
};

  const TakeOrder = (items)=>{ 
    return new Promise( resolve => {
            setTimeout(()=>{
            let orderSize = 3;
                const orders = [];
                while(orderSize)
                {
                const RandomIndex = Math.floor(Math.random()*(items.length));
                if(orders.includes(RandomIndex))
                    continue;
                orders.push(RandomIndex);
                orderSize--;
                }
                resolve(orders)
            },2500)
        })  
  }

  const orderPrep = ()=>{
    return new Promise( resolve => {
        setTimeout(()=>{
          resolve({ order_status:true,paid:false})
        },1500)
    })  
  }

  const payOrder = ()=>{
    return new Promise( resolve => {
        setTimeout(()=>{
          resolve({ order_status:true,paid:true})
        },1000)
    })  
  }

  function  thankYou(){
    alert(" thankyou for eating with us today!")
  }
 useEffect(() => {
  const asyncFlow = async () => {
    const items = await getMenu();
    setMenuItems(items);

    const orders = await TakeOrder(items);
    console.log("Orders taken:", orders);

    const prep = await orderPrep();
    console.log("Order prepared:", prep);

    const payment = await payOrder();
    console.log("Payment status:", payment);

    if (payment.paid) thankYou();
  };

  asyncFlow();
}, []);


  return (
    <section className="text-white">
     
      <div className="p-6">
        <img
          src="https://i.ibb.co/FbNgxxz7/bfaad74b76ba1256d10f8af33fd5e08b7574087c.png"
          alt="banner"
          className="w-full rounded-[30px]"
        />
      </div>

   
      <div className="p-6">
        <h3 className="text-2xl font-semibold">Menu</h3>

        <div className="grid grid-cols-3 gap-[29px] py-6">
          {menuItems?.length ? (
            menuItems.map((item) => (
              <Card key={item.id}>
                <img
                  src="https://images.unsplash.com/photo-1572802419224-296b0aeee0d9?q=80&w=1115&auto=format&fit=crop"
                  alt={item.name}
                  className="w-full rounded-[10px]"
                />

                <div className="flex justify-between items-center">
                  <div>
                    <p className="text-2xl font-semibold px-2.5 pt-4">
                      {item.name}
                    </p>
                    <p className="px-2.5 text-xl pb-4 pt-1">
                      ${item.price}/-
                    </p>
                  </div>

                  <div className="bg-[#363A43] w-10 h-10 rounded-[10px] flex justify-center items-center">
                    <Plus className="text-[#878787]" />
                  </div>
                </div>
              </Card>
            ))
          ) : (
            <div className="text-2xl font-semibold">
              No Menu Items present right now
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Home;
