
export default {
    persianMonthName(month=1){
        let monthNames = [
            'فروردین',
            'اردیبهشت',
            'خرداد',
            'تیر',
            'مرداد',
            'شهریور',
            'مهر',
            'آبان',
            'آذر',
            'دی',
            'بهمن',
            'اسفند'
        ];
        return monthNames[month-1];
    },
    windowOffset(){
        let ret = {};
        ret.left = 0;
        ret.top = 0;
        ret.width = window.innerWidth ||
                    document.documentElement.clientWidth ||
                    document.body.clientWidth ||
                    document.body.offsetWidth;
        ret.height = window.innerHeight ||
                    document.documentElement.clientHeight ||
                    document.body.clientHeight ||
                    document.body.offsetHeight;
        return ret;
    },
    getOffset(dom){
        if( dom.style.display == 'none' ){
            var cln = dom.cloneNode(true);
            cln.style.display = 'block';
            cln.style.position = 'absoulute';
            //cln.style.left = '-9999px';
            //cln.style.top = '-9999px';
            document.body.appendChild(cln);
            var rect = cln.getBoundingClientRect();
            cln.remove();
            return {
                width: rect.width,
                height: rect.height
            }
        }
        else{
            return dom.getBoundingClientRect()
        }
        
    },
    isDescendant(parent, child){
        if( child === null || parent === null ){
            return false;
        }
        var node = child.parentNode;
        while (node!==null) {
            if (node == parent) {
                return true;
            }
            node = node.parentNode;
        }
        return false;
    },
    contains(text='',search=''){
        return text.toString().toUpperCase().indexOf(search.toString().toUpperCase()) !== -1;
    },
    doIt(action){
        setTimeout( action, 100 );
    },
    isInViewport(el, offset = 0){
        let rect = el.getBoundingClientRect();
        let win = {
            height: window.innerHeight || document.documentElement.clientHeight,
            width: window.innerWidth || document.documentElement.clientWidth
        }
        return rect.top >= offset && rect.bottom <= win.height - offset && rect.left >= offset && rect.right <= win.width - offset;
    },
    lockScroll(lock = true){
        document.body.classList[lock === true ? 'add' : 'remove']('lock-scroll');
    },
    capitalizeFirstLetter(str = ''){
        return str.charAt(0).toUpperCase() + str.slice(1);
    },
    getTarget(){
        if(typeof define === "function" && define.amd) {
            return 'amd';
        } else if(typeof module === "object" && module.exports) {
            return 'module';
        } else {
            return 'browser';
        }
    },
    vueEvents(){
        return [
            'click',
            'focus',
            'blur',
            'keyup',
            'keydown',
            'keypress',
            'invalid'
        ];
    },
    _dependencies: {
        moment: null
    },
}