const API_URL = 'https://api.thecatapi.com/v1/images/search?limit=10';
let container = document.getElementById('container');
const list = document.createDocumentFragment();
const div = document.createElement('div');
div.classList.add('btnContainer');

const button = document.createElement('button');

// fetch(URL)
//   .then((res) => res.json())
//   .then((data) => {
//     const img = document.querySelector('img');
//     img.src = data[0].url;
//   });

const fetchData = async () => {
  const res = await fetch(API_URL);
  const data = await res.json();
  // console.log(data);
  showData(data);
  // const img = document.querySelector('img');
  // img.src = data[0].url;
};

const showData = (data) => {
  data.map((info) => {
    const image = document.createElement('img');
    image.src = `${info.url}`;
    image.alt = 'Cat photo';
    image.classList.add('photo');

    list.appendChild(image);
    console.log(list);
  });

  container.appendChild(list);

  button.classList.add('random');
  button.innerText = 'New cat images';
  button.addEventListener('click', fetchData);
  div.appendChild(button);

  container.appendChild(div);
};

fetchData();
