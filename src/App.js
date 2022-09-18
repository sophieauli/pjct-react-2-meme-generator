import { useEffect, useState } from 'react';

function App() {
  const [templates, setTemplates] = useState([]);
  const [meme, setMeme] = useState('');
  const [topText, setTopText] = useState('');
  const [bottomText, setBottomText] = useState('');
  const templatesUrl = 'https://api.memegen.link/templates';
  const finalUrl = `https://api.memegen.link/images/${meme}${topText}${bottomText}.jpg`;
  console.log(finalUrl);
  const fetchTemplates = async () => {
    const res = await fetch(templatesUrl);
    const json = await res.json();
    setTemplates(json);
    console.log(json);
  };

  useEffect(() => {
    fetchTemplates().catch((error) => console.log(error));
  }, []);
  console.log(meme);
  return (
    <div>
      <p>
        <label>
          Meme:
          <select
            id="select"
            value={meme}
            onChange={(event) => {
              setMeme(event.currentTarget.value);
            }}
          >
            {templates.map((template) => (
              <option value={template.name} key={template.id}>
                {template.name}
              </option>
            ))}
          </select>
        </label>
      </p>
      <p>
        <label>
          Top Text:
          <input
            placeholder="Top text"
            // id="top-text"
            value={topText.replace('_', '')}
            onChange={(event) => {
              setTopText(event.currentTarget.value.replace('_', ''));
            }}
          />
        </label>
      </p>
      <p>
        <label>
          Bottom Text:
          <input
            placeholder="Bottom text"
            // id="top-text"
            value={bottomText.replace('_', '')}
            onChange={(event) => {
              setBottomText(event.currentTarget.value.replace('_', ''));
            }}
          />
        </label>
        {/* <div>{setTemplates}</div>
        <div>{topText}</div>
        <div>{bottomText}</div> */}
        {/* <img
        src={`https://api.memegen.link/images${meme}/`} `${topText}/` + bottomText>
        alt="meme"
        /> */}
      </p>
    </div>
  );
}
//next step: control the value. select control component in react - after selecting what happens? That is an event that will alter the state.
//Display template after clicking on it.
//img src = link to url with the variables.
export default App;
