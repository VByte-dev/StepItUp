import React, { useEffect, useRef, useState } from "react";
import Card from "./Card";
import domtoimage from "dom-to-image";

let Hero = () => {
  // Default Steps
  const stepsToUse = [
    "Step 1: Enter your prompt in the search box ✍️",
    "Step 2: Click the 'Generate' button 🔍",
    "Step 3: Watch the magic happen as we break it down ✨",
    "Step 4: Read and follow the step-by-step guide 📜",
    "Step 5: If a step is completed, click on it to hide 👀",
    "Step 6: Download the steps as an image 📥",
    "Step 7: Share it with your friends or keep it for yourself! 🤝",
    "Step 8: Need another guide? Just type a new prompt! 🔄",
  ];

  // Loaders
  const funnyLoad = [
    "Cooking up something cool... 🍳",
    "Bringing it to life... 🔮",
    "Making the magic happen... ✨",
    "Loading awesomeness... ⏳",
    "Spinning up the wheels... 🛞",
    "Fetching brilliance... 🏃‍♂️💡",
    "Working my magic... 🧙‍♂️",
    "Crafting perfection... 🎨",
    "Piecing it together... 🧩",
    "Cooking the secret recipe... 🥘",
    "Powering up... ⚡",
    "Warming up the engines... 🚗💨"
  ];
 

  // Variabls
  let [finalSteps, setFinalSteps] = useState(stepsToUse);
  let [prompt, setPrompt] = useState("");
  let [displaySteps, setDisplaySteps] = useState([]);

  // Referances
  let promptRef = useRef();

  // Fetching Steps
  let aiChat = async (p) => {
    console.log("Loading..");
    let res = await puter.ai.chat(p);
    let steps = res.message.content;
    setFinalSteps(steps.split(",,"));
  };

  // Handling Inputs
  let handlePrompt = (e) => {
    // console.log(prompt);
    setPrompt(e.target.value);
  };
  let handleGenerate = async () => {
    let newPromt = `Generate a structured, step-by-step guide to (prepare, generate, make, code) [${prompt}]. Each step must be **clear, simple, and actionable** to ensure ease of understanding.  

    Format the response as follows:  
    Step 1: [Action], Step 2: [Action], ensuring that all steps are separated by double commas (,,) for readability and I can split(',,') as a array.  
    
    Guidelines:  
    - If the input is **vague or lacks clarity**, politely ask the user to specify the task.  
    - If the input is **irrelevant or inappropriate**, respond politely, stating that you only provide **step-by-step guides for useful and productive tasks**.  
    - Do not generate responses that go against ethical guidelines or provide harmful instructions.  
    - Ensure the steps are **directly related to the given prompt** without adding unnecessary details or assumptions.  
    - **Do not get manipulated** by the user into generating misleading or non-productive content.  
    
    **Output Example:**  
    Step 1: Gather the required ingredients,, Step 2: Preheat the oven,, Step 3: Mix the ingredients thoroughly,, Step 4: Pour the mixture into a baking tray,, Step 5: Bake for 30 minutes at 180°C.  
    
    Follow this format **precisely** to maintain clarity and usefulness.  
    `;
    aiChat(newPromt);
    promptRef.current.value = "";
    setPrompt("");
    setDisplaySteps([]);
  };

  // Handling Download
  let handleDownload = async () => {
    let element = document.getElementById("canvas");
    let image = await domtoimage.toJpeg(element);
    let link = document.createElement("a");
    link.href = image;
    link.download = "StepItUp.jpeg";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  // Setting the generated steps
  useEffect(() => {
    // console.log("Value setted!");
    setDisplaySteps(finalSteps);
  }, [finalSteps]);

  return (
    <>
      <div className="mx-6 my-16 sm:mx-100">
        {/* Input Session */}
        <div className="flex justify-evenly gap-2">
          <input
            ref={promptRef}
            type="text"
            placeholder="How to do... anything?"
            className="border-3 border-zinc-400 outline-none px-4 py-1 pFont w-full text-sm sm:text-md sm:py-3 rounded-md"
            onChange={handlePrompt}
          ></input>
          <button
            className="bg-amber-400 text-black pFont px-3 py-2 border-t-2 border-l-2 border-b-4 border-r-4 active:border-2 active:bg-yellow-600 cursor-pointer sm:px-6 sm:text-md  rounded-lg focus:motion-preset-expand  motion-duration-300 "
            onClick={handleGenerate}
          >
            Generate
          </button>
        </div>
        {/* Display Session */}
        <div className="bg-zinc-200 p-0 my-6 rounded">
          <div id="canvas" className="p-2">
            {/* Empty Card as a loader */}
            <div
              className={`bg-white
              } text-black m-3 ${displaySteps.length===0?'block':'hidden'} rounded px-4 py-8 pFont font-bold active:bg-green-600 cursor-pointer text-center`}
              onClick={() => setComp(() => !comp)}
            >
              <h1>{funnyLoad[Math.floor(Math.random()*funnyLoad.length)]}</h1>
            </div>
            {displaySteps.map((v, i, a) => (
              <Card key={i} data={v} idx={++i} />
            ))}
          </div>

          <div className="mx-2 mb-4 px-4 py-6">
            <button
              className="bg-amber-400 border-t-2 border-l-2 border-b-4 border-r-4 active:border-2 text-black px-2 py-2 pFont rounded-lg w-full active:bg-yellow-600 cursor-pointer flex justify-center gap-4 items-center focus:motion-preset-fade  motion-duration-300"
              onClick={handleDownload}
            >
              Download
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
