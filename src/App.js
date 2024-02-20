import './App.css';
// import Button from './component/button';
// import Effect from './component/useeffect';
import Plus from './component/usereducer';
// import Ref from './component/useref';
// import Footer from './footer';

function App() {
  return (
    <>
      <div className="App">
        <h1>Ufuk Demirel</h1>
        <button className='flex p-2 bg-slate-100 text-red-700 rounded-xl border-2'>Send</button>
        {/* <Button text="Button 1" variant="success"/>
      <Button text="Button 2" variant="danger"/>
      <Button text="Button 3" variant="light"/> */}
        {/* <Effect/> */}
        <Plus />
        {/* <Counter/> */}
        {/* <Ref/>
      <Footer/> */}
      </div>
      <style jsx>{`
          .App{
            background: white;
          }
    `}
      </style>
    </>
  );
}

export default App;
