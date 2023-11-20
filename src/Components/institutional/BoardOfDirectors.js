import { Container } from "react-bootstrap";
import { useTranslation } from "react-i18next";

export default function BoardOfDirectors() {
  const { t, i18n } = useTranslation();

  return (
    <div className="banner-home py-10">
      <Container className="">
        <div className="flex flex-col md:flex-row gap-5 flex-wrap">
          <div class="bg-gray-200 border w-full  sm:max-w-[230px] border-gray-200 rounded-lg shadow-lg shadow-zinc-400 dark:bg-gray-800 dark:border-gray-700 ">

              <img
                class="rounded-t-lg "
                src="https://png.pngtree.com/png-vector/20190710/ourmid/pngtree-user-vector-avatar-png-image_1541962.jpg"
                alt=""
              />
            <div className="p-3 text-center">
              <a href="#" className="decoration-transparent">
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                  Yasin Yılmaz
                </h5>
              </a>
              <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
                Yönetim Kurulu
              </p>
            </div>
          </div>
          <div className="bg-gray-300 borde w-full  md:max-w-[230px] border-gray-200 rounded-lg shadow-lg shadow-zinc-400 dark:bg-gray-800 dark:border-gray-700 ">
          <a href="#">
            <img
              className="rounded-t-lg "
              src="https://png.pngtree.com/png-vector/20190710/ourmid/pngtree-user-vector-avatar-png-image_1541962.jpg"
              alt=""
            />
          </a>
          <div className="p-3 text-center">
            <a href="#">
              <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                Yasin Yılmaz
              </h5>
            </a>
            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
              Yönetim Kurulu
            </p> 
          </div>
        </div>
        <div className="bg-gray-300 borde w-full  md:max-w-[230px] border-gray-200 rounded-lg shadow-lg shadow-zinc-400 dark:bg-gray-800 dark:border-gray-700 ">
          <a href="#">
            <img
              class="rounded-t-lg "
              src="https://png.pngtree.com/png-vector/20190710/ourmid/pngtree-user-vector-avatar-png-image_1541962.jpg"
              alt=""
            />
          </a>
          <div className="p-3 text-center">
            <a href="#">
              <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                Yasin Yılmaz
              </h5>
            </a>
            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
              Yönetim Kurulu
            </p> 
          </div>
        </div>
        <div class="bg-gray-300 borde w-full  md:max-w-[230px] border-gray-200 rounded-lg shadow-lg shadow-zinc-400 dark:bg-gray-800 dark:border-gray-700 ">
          <a href="#">
            <img
              class="rounded-t-lg "
              src="https://png.pngtree.com/png-vector/20190710/ourmid/pngtree-user-vector-avatar-png-image_1541962.jpg"
              alt=""
            />
          </a>
          <div class="p-3 text-center">
            <a href="#">
              <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                Yasin Yılmaz
              </h5>
            </a>
            <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
              Yönetim Kurulu
            </p> 
          </div>
        </div>
        <div class="bg-gray-300 borde w-full  md:max-w-[230px] border-gray-200 rounded-lg shadow-lg shadow-zinc-400 dark:bg-gray-800 dark:border-gray-700 ">
          <a href="#">
            <img
              class="rounded-t-lg "
              src="https://png.pngtree.com/png-vector/20190710/ourmid/pngtree-user-vector-avatar-png-image_1541962.jpg"
              alt=""
            />
          </a>
          <div class="p-3 text-center">
            <a href="#">
              <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                Yasin Yılmaz
              </h5>
            </a>
            <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
              Yönetim Kurulu
            </p> 
          </div>
        </div>
        <div class="bg-gray-300 borde w-full  md:max-w-[230px] border-gray-200 rounded-lg shadow-lg shadow-zinc-400 dark:bg-gray-800 dark:border-gray-700 ">
          <a href="#">
            <img
              class="rounded-t-lg "
              src="https://png.pngtree.com/png-vector/20190710/ourmid/pngtree-user-vector-avatar-png-image_1541962.jpg"
              alt=""
            />
          </a>
          <div class="p-3 text-center">
            <a href="#">
              <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                Yasin Yılmaz
              </h5>
            </a>
            <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
              Yönetim Kurulu
            </p> 
          </div>
        </div>
        </div>
      </Container>
    </div>
  );
}
