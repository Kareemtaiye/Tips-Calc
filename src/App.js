import { useState } from "react";

function App() {
  const [bill, setBill] = useState(0);
  const [service, setService] = useState(0);
  const [friendService, setfriendService] = useState(0);

  console.log({ bill, service, friendService });

  const serviceOpt = [
    { rev: "Dissatisfied", perc: 0 },
    { rev: "It was okay", perc: 10 },
    { rev: "It was good", perc: 15 },
    { rev: "Absolutely amazing!", perc: 20 },
  ];

  const tipService = bill * (service / 100);
  const tipFriendService = bill * (friendService / 100);
  const totalTips = tipService + tipFriendService;
  const totalBill = bill + totalTips;

  function handleResetTip() {
    setBill(0);
    setService(0);
    setfriendService(0);
  }

  return (
    <main>
      <Inputs sateVal={bill} setState={setBill} />

      <Selections
        text="How did you like the service"
        sateVal={service}
        arr={serviceOpt}
        setState={setService}
      />

      <Selections
        text="How did your friend like the service"
        stateVal={friendService}
        arr={serviceOpt}
        setState={setfriendService}
      />

      <Total totalBill={totalBill} bill={bill} totalTips={totalTips} />

      <Reset onHandleResetTip={handleResetTip} />
    </main>
  );
}

export default App;

function Inputs({ setState, stateVal }) {
  return (
    <div>
      <span>How much was the bill</span>
      <input
        value={stateVal}
        onChange={(e) => setState(Number(e.target.value))}
        type="text"
      />
    </div>
  );
}

function Selections({ text, arr, setState, stateVal }) {
  return (
    <div>
      <span>{text}</span>
      <select
        value={stateVal}
        onChange={(e) => setState(Number(e.target.value))}
      >
        {arr.map((option) => (
          <option key={option.perc} value={option.perc}>
            {option.rev}(${option.perc})
          </option>
        ))}
      </select>
    </div>
  );
}

function Total({ totalTips, totalBill, bill }) {
  return (
    <div>
      <h2>
        You pay ${totalBill} (${bill} + ${totalTips} tip)
      </h2>
    </div>
  );
}

function Reset({ onHandleResetTip }) {
  return <button onClick={onHandleResetTip}>Reset</button>;
}
