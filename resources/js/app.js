import './bootstrap';
import '../css/app.css';

import '../src/js/jquery1-3.4.1.min.js';
// import '../src/js/popper1.min.js';
// import '../src/js/bootstrap1.min.js';
import '../src/js/metisMenu.js';
import '../src/vendors/count_up/jquery.waypoints.min.js';
// import '../src/vendors/chartlist/Chart.min.js';
import '../src/vendors/count_up/jquery.counterup.min.js';
import '../src/vendors/niceselect/js/jquery.nice-select.min.js';
import '../src/vendors/owl_carousel/js/owl.carousel.min.js';
import '../src/vendors/datatable/js/jquery.dataTables.min.js';
import '../src/vendors/datatable/js/dataTables.responsive.min.js';
import '../src/vendors/datatable/js/dataTables.buttons.min.js';
import '../src/vendors/datatable/js/buttons.flash.min.js';
import '../src/vendors/datatable/js/jszip.min.js';
// import '../src/vendors/datatable/js/pdfmake.min.js';
// import '../src/vendors/datatable/js/vfs_fonts.js';
import '../src/vendors/datatable/js/buttons.html5.min.js';
import '../src/vendors/datatable/js/buttons.print.min.js';
import '../src/vendors/datepicker/datepicker.js';
import '../src/vendors/datepicker/datepicker.en.js';
import '../src/vendors/datepicker/datepicker.custom.js';
// import '../src/js/chart.min.js';
// import '../src/vendors/chartjs/roundedBar.min.js';
import '../src/vendors/progressbar/jquery.barfiller.js';
import '../src/vendors/tagsinput/tagsinput.js';
import '../src/vendors/text_editor/summernote-bs4.js';
import '../src/vendors/am_chart/amcharts.js';
import '../src/vendors/scroll/perfect-scrollbar.min.js';
import '../src/vendors/scroll/scrollable-custom.js';
import '../src/vendors/vectormap-home/vectormap-2.0.2.min.js';
import '../src/vendors/vectormap-home/vectormap-world-mill-en.js';
import '../src/vendors/apex_chart/apex-chart2.js';
import '../src/vendors/apex_chart/apex_dashboard.js';
// import '../src/vendors/echart/echarts.min.js';
import '../src/vendors/chart_am/core.js';
import '../src/vendors/chart_am/charts.js';
import '../src/vendors/chart_am/animated.js';
import '../src/vendors/chart_am/kelly.js';
import '../src/vendors/chart_am/chart-custom.js';
import '../src/js/dashboard_init.js';
import '../src/js/custom.js';

import { createApp, h } from 'vue';
import { createInertiaApp } from '@inertiajs/vue3';
import { resolvePageComponent } from 'laravel-vite-plugin/inertia-helpers';
import { ZiggyVue } from '../../vendor/tightenco/ziggy/dist/vue.m';

const appName = 'TRCSL';

createInertiaApp({
    title: (title) => `${title} - ${appName}`,
    resolve: (name) => resolvePageComponent(`./Pages/${name}.vue`, import.meta.glob('./Pages/**/*.vue')),
    setup({ el, App, props, plugin }) {
        return createApp({ render: () => h(App, props) })
            .use(plugin)
            .use(ZiggyVue, Ziggy)
            .mount(el);
    },
    progress: {
        color: '#4B5563',
    },
});
