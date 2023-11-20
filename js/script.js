function getDataWithXHR() {
  const xhr = new XMLHttpRequest();
  xhr.open("GET", "data.json");

  xhr.onload = function () {
    if (xhr.status >= 200 && xhr.status < 400) {
      const { children } = JSON.parse(xhr.responseText);

      const xhr2 = new XMLHttpRequest();
      xhr2.open("GET", "data2.json");

      xhr2.onload = function () {
        if (xhr2.status >= 200 && xhr2.status < 400) {
          const { children: children2 } = JSON.parse(xhr2.responseText);
          const mergeArray = [...children, ...children2];
          console.log(mergeArray);
        }
      };

      xhr2.send();
    }
  };

  xhr.send();
}

getDataWithXHR();

//  function getDataWithFetch() {
// 	fetch('data.json')
// 	  .then((response) => {
// 		 if (!response.ok) {
// 			throw new Error(`HTTP error! Status: ${response.status}`);
// 		 }
// 		 return response.json();
// 	  })
