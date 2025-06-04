export class FilterComponent {
    constructor(parent, onSearch) {
        this.parent = parent;
        this.onSearch = onSearch;
    }

    getHTML() {
        return `
            <div class="search-filter mb-3">
                <input type="text" placeholder="Введите название..." id="search-input" class="form-control" />
            </div>
        `;
    }

    addListeners() {
        const input = this.parent.querySelector('#search-input');
        if (!input) return;

        input.addEventListener('input', () => {
            const query = input.value.trim();
            this.onSearch(query);
        });
    }

    render() {
        this.parent.innerHTML = this.getHTML();
        this.addListeners();
    }
}