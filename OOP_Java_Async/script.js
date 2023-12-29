// Задача

// Необходимо получить список всех пользователей с помощью бесплатного API (https://jsonplaceholder.typicode.com/users) и отобразить их на странице. Пользователь должен иметь возможность удалить любого пользователя из списка.

const getAsyncAwaitData = async (url) => {
    const res = await fetch(url);
    const json = await res.json();
    return json;
};

const url = 'https://jsonplaceholder.typicode.com/users';

const newData = await getAsyncAwaitData(url);
    console.log(newData);

    try {
        const newData = await getAsyncAwaitData(url);
        console.log(newData);
        const pictureBoxEl = document.querySelector('.cards-box');
        newData.forEach((element) => {
          const picture = `
              <div class="card" id="${element.id}"><!-- Добавили ID -->
                  <h3>Пользователь ${element.id}</h3>
                  <p class="name">Имя: ${element.name}</p>
                  <p class="username">Ник: ${element.username}</p>
                  <p class="email">Email: ${element.email}</p>
                  <button class="btn__del">Удалить пользователя</button>
              </div>
              `
      
          pictureBoxEl.insertAdjacentHTML("beforeend", picture)
        })
        const deleteBtn = document.querySelectorAll('.btn__del');
        deleteBtn.forEach((button) => {
          button.addEventListener('click', () => {
            const product = button.closest('.card');
            product.remove();
           })
        })
      } catch (error) {
        console.error('что-то пошло не так');
      }
