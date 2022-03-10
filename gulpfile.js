//Для запуска нового проекта нужно скопировать в папку нового проекта:
//? папка 'gulp'
//? папка 'src'
//? папка 'gulpfile.js'
//? папка 'package.json'
//Установка gulp в новый проект
//TODO в папке проекта клик правой кнопкой - 'открыть во встроенном терминале'
//TODO убедиться что терминал в режиме 'bash'
//Запуск команды установщик сборки галпа для этого проекта
//* npm i
//Запуск gulp В режиме разработчика
//* npm run dev
//Запуск gulp В режиме продакшен - клиентская сборка (минимазиция и т.п.)
//* npm run build
//Создать svg sprite
//* npm run svgSprive
//Запаковать сборку в зип архив
//* npm run zip
//Выход из галп в командную строку
//* ctrl+C

//Основной модуль
import gulp from "gulp";
//Импорт путей
import { path } from "./gulp/config/path.js";
//Импотр общих плагинов
import { plugins } from "./gulp/config/plugins.js";

//Передаем значения в глобальную переменную
global.app = {
   isBuild: process.argv.includes('--build'),
   isDev: !process.argv.includes('--build'),
   path: path,
   gulp: gulp,
   plugins: plugins
}

//Импорт задачи
import { copy } from "./gulp/tasks/copy.js";
import { reset } from "./gulp/tasks/reset.js";
import { html } from "./gulp/tasks/html.js";
import { server } from "./gulp/tasks/server.js";
import { scss } from "./gulp/tasks/scss.js";
import { js } from "./gulp/tasks/js.js";
import { images } from "./gulp/tasks/images.js";
import { otfToTtf, ttfToWoff, fontStyle } from "./gulp/tasks/fonts.js";
import { svgSprive } from "./gulp/tasks/svgSprive.js";
import { zip } from "./gulp/tasks/zip.js";

//Наблюдатель за изменениями в файлах
function watcher() {
   gulp.watch(path.watch.files, copy);
   gulp.watch(path.watch.html, html);
   gulp.watch(path.watch.scss, scss);
   gulp.watch(path.watch.js, js);
   gulp.watch(path.watch.images, images);
}

export { svgSprive }

//Последовательная обработка шрифтов
const fonts = gulp.series(otfToTtf, ttfToWoff, fontStyle);

//Основные задачи
const mainTask = gulp.series(fonts, svgSprive, gulp.parallel(copy, html, scss, js, images));

//Построение сценариев выполнения задач
const dev = gulp.series(reset, mainTask, gulp.parallel(watcher, server));
const build = gulp.series(reset, mainTask);
const deployZip = gulp.series(reset, mainTask, zip);

//Экспорт сценариев
export { dev }
export { build }
export { deployZip }

//Выполнение сценария по умолчанию
gulp.task('default', dev);
