<script>
export default {
    data() {
        return {
            darkmode: async () => {
                setInterval(() => {
                    if (document.querySelector('html[data-theme="dark"]')) {
                        document.querySelector('html').classList.add('dark');
                    } else {
                        document.querySelector('html').classList.remove('dark')
                    }
                }, 500);
            }
        }
    },
    mounted() {
        this.darkmode()
    }
}
</script>