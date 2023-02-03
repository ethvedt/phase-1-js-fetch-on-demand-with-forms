const init = () => {
  formSetup();
}

document.addEventListener('DOMContentLoaded', init);

function formSetup() {
    const form = document.querySelector('form');
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        const input = document.querySelector("input#searchByID");

        fetch(`http://localhost:3000/movies/${input.value}`)
            .then((response) => response.json())
            .then((data) => {
                console.log(data);
                const title = document.querySelector(`section#movieDetails h4`);
                const summary = document.querySelector(`section#movieDetails p`);
                title.textContent = data.title;
                summary.textContent = data.summary;
            });
    });
};