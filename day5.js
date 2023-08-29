let stocks = {
    fruits : ['strawberry','grapes','banana','apple'],
    liquid : ['water','ice'],
    holder : ['cone', 'cup', 'stick'],
    toppings : ['chocolate', 'peanuts'],
};

// let order = (fruit_name,call_production) => {
//     setTimeout(() => {
//         console.log(`${stocks.fruits[fruit_name]} was selected`)
//         call_production()
//     }, 2000);
// }

// //callback hell
// let production = () => {
//     setTimeout(()=> {
//         console.log(`production has started`)

//         setTimeout(()=>{
//             console.log(`the fruit has been chopped`)

//             setTimeout(()=>{
//                 console.log(`${stocks.liquid[0]} and ${stocks.liquid[1]} was added`)
//                 setTimeout(()=>{
//                     console.log(`the machine has started`)

//                     setInterval(()=>{
//                         console.log(`ice-cream was placed on ${stocks.holder[0]}`)

//                         setInterval(()=>{
//                             console.log(`${stocks.toppings[0]} was added`)

//                             setTimeout(()=>{
//                                 console.log(`serve ice-cream`)
//                             },2000)
//                         },3000)
//                     },2000)
//                 },1000)
//             }, 1000)
//         },2000)
//     }, 0000);
// }

// order(0,production);


//promises

let isShopOpen = true;

// let order = (time, work) => {
//     return new Promise((resolve, reject) => {
//         if (isShopOpen) {
//             setTimeout(() => {
//                 resolve(work());
//             }, time);
//         } else {
//             reject('Our shop is closed');
//         }
//     });
// };

// order(2000, () => console.log(`${stocks.fruits[0]} was selected`))

//     .then(() => {
//         return order(1000, () => console.log('Production has started'));
//     })

//     .then(() => {
//         return order(2000, () => console.log('Fruit was chopped'));
//     })

//     .then(() => {
//         return order(1000, () => console.log(`${stocks.liquid[0]} and ${stocks.liquid[1]} was selected`));
//     })

//     .then(() => {
//         return order(1000, () => console.log('Start the machine'));
//     })

//     .then(() => {
//         return order(2000, () => console.log(`Ice-cream was placed on ${stocks.holder[0]}`));
//     })

//     .then(() => {
//         return order(3000, () => console.log(`${stocks.toppings[0]} was selected`));
//     })

//     .then(() => {
//         return order(1000, () => console.log('Ice-cream was served'));
//     })

//     .catch(() => {
//         console.log('Customer left');
//     })

//     .finally(() => {
//         console.log('Day ended, shop is closed');
//     });



//async await
// let toppinsChoice = () => {
//     return new Promise((resolve, reject) => {
        
//         setTimeout(()=> {
//             resolve(
//                 console.log('which topping would you love ?')
//             )
            
//         },3000);
//     });
// };

// async function kitchen (){
//     console.log('A')
//     console.log('B')
//     console.log('C')

//     await toppinsChoice()

//     console.log('D')
//     console.log('E')
// }

// kitchen()

// console.log('cleaning the dishes')
// console.log('cleaning the table')
// console.log('other actions')


function time(ms){
    return new Promise ((resolve, reject)=>{
        if(isShopOpen){
            setTimeout(resolve,ms)
        }else{
            reject(console.log('shop is closed'))
        }
    });
}

async function kitchen(){
    try{
        await time(2000)
        console.log(`${stocks.fruits[0]} was selected`)

        console.log(`start the production`)

        await time(2000)
        console.log(`cut the fruit`)


        await time(1000)
        console.log(`${stocks.liquid[0]} and ${stocks.liquid[1]} was added`)

        await time(1000)
        console.log(`start the machine`)

        await time(2000)
        console.log(`ice-cream was placed on ${stocks.holder[0]}`)

        await time(3000)
        console.log(`${stocks.toppings[0]} was selected`)

        await time(2000)
        console.log(`serve ice-cream`)

    }
    catch(error){
        console.log('customer left', error)
    }
    finally{
        console.log('day ended the shop is closed')
    }
}

kitchen()