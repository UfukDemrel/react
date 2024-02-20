// useReducer, React tarafından sağlanan bir hook'tur ve React bileşenlerinde state yönetimini yapmak için kullanılır. 
// Genellikle birçok durumda useState ile benzer işlevi yerine getirebilir ancak daha karmaşık state mantıkları veya state'lerin 
// birbiriyle ilişkili olduğu durumlarda useReducer tercih edilebilir.

// Reducer: Bir reducer fonksiyonu, mevcut state'i ve bir eylem nesnesini alır ve yeni state'i döndürür. Bu fonksiyon, state'in nasıl değiştirileceğini belirler. 
// Genellikle bir switch ifadesi içerir ve eylem türüne göre farklı durumlara göre state'i günceller.

// Action (Eylem): Bir eylem nesnesi, state'i değiştirmek için gerekli olan bilgileri içerir. Bu, genellikle bir objedir ve en azından bir type özelliğine sahiptir, 
// bu da yapılacak işlemi belirtir. Ayrıca, state'i güncellemek için gereken diğer veriler de bu objenin içinde olabilir.

// Dispatch (Dağıtım): Dispatch fonksiyonu, reducer fonksiyonuna bir eylem nesnesi göndermek için kullanılır. 
// Reducer, bu eylem nesnesine göre state'i günceller ve güncellenmiş state'i döndürür. Dispatch fonksiyonu, reducer'ı tetikleyerek state'i günceller.

// State: State, bileşenin durumunu temsil eder. useReducer kullanırken, state, reducer fonksiyonu tarafından yönetilen ve bileşenin içinde depolanan veridir. 
// Action tarafından tetiklenen değişiklikler sonucunda güncellenir.

// Initial State (Başlangıç Durumu): Başlangıç durumu, reducer fonksiyonunun başlangıçta kullanacağı state'i tanımlar. 
// Bu, genellikle bir obje veya değerdir ve bileşenin ilk render edildiğinde sahip olduğu varsayılan state'i temsil eder.
import { useReducer } from "react";

const initialState = { plus: 0 }

function reducer(state, action) {
    switch (action.type) {
        case 'increment':
            return { plus: state.plus - 1 };
        case 'decrement':
            return { plus: state.plus + 1 };
        default:
            throw new Error();    
    }
}

function Plus() {

    const [state, dispacth] = useReducer(reducer, initialState);

    return (
        <div>
            <div>Count: {state.plus}</div>
            <button onClick={() => dispacth({type: 'increment'}) }>Azalt</button>
            <button onClick={() => dispacth({type: 'decrement'}) }>Arttır</button>
        </div>
    );
}

export default Plus;
