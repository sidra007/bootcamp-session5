import React,{useState} from 'react';
import Parent from './Parent.js';
import Counter from './Counter.js';


function App(){
  let Count=useState(8);


  return(

<Counter.Provider value={Count}>
    <div>
      <Parent/>
    </div>
</Counter.Provider>
  );
}

export default App;
