import logo from '@/assets/images/images.png'


export default {
    props : ['title'],
    emits: ['alert-search'],
    data() {
      return{
          searchColor: 'red',
          fontSize: 18,
          logo: logo,
          showSearchResult: false,
          searchQuery: '',
      }
    },
    methods: {
        handleSearch(event) {
          this.searchQuery = event.target.value;
          this.showSearchResult = this.searchQuery !== '';
          alert('You searched: ' + event.target.value);
        },
    }
}  