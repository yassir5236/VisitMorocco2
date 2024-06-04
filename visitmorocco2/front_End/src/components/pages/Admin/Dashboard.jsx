import Footer from '../../sections/Footer/Footer';
import Header from '../../sections/Header/Header';
import InteretList from '../../sections/Interets/InteretList';
import ListRegion from '../../sections/Region/ListRegion';
import ListTypes from '../../sections/Type/ListTypes';
import './Dashboard.css';


const Dashboard = () => {
  return (
    <>

      <Header />

   
        <ListRegion />
        <ListTypes />
        <InteretList />

      <div className='flex ml-10'>


        {/* <div className="flex flex-col text-sm max-w-[160px]">
          <div className="flex gap-1.5 self-center px-5 text-base font-semibold text-cyan-500 whitespace-nowrap">
            <img
              loading="lazy"
              srcSet="..."
              className="shrink-0 aspect-square w-[33px]"
            />
            <div className="my-auto">Traveloo</div>
          </div>
          <div className="shrink-0 self-center mt-8 h-px border-2 border-solid bg-zinc-100 border-zinc-100 w-[106px]" />
          <div className="flex gap-3 mt-9 font-medium text-cyan-500 whitespace-nowrap">
            <div className="shrink-0 my-auto h-5 bg-cyan-500 rounded-md w-[5px]" />
            <div className="flex gap-3 justify-center px-4 py-3">
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/203b7b8c464d00403db0f6e9b02dc9a7cd483242742b6599401fbf5c8892e3b5?"
                className="shrink-0 w-6 aspect-square"
              />
              <div className="my-auto">Home</div>
            </div>
          </div>
          <div className="flex flex-col items-start pl-4 mt-3 w-full text-black">
            <div className="flex gap-3 justify-center items-center px-4 py-3 whitespace-nowrap">
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/0867b1f30adbe5628510961ede374ea1849d4a7165ea9d0aa2814d8405d048ef?"
                className="shrink-0 self-stretch w-6 aspect-square"
              />
              <div className="self-stretch my-auto">Booking</div>
              <div className="shrink-0 self-stretch my-auto w-2 h-2 bg-red-500 rounded-full" />
            </div>
            <div className="flex gap-3 justify-center px-4 py-3 mt-3 whitespace-nowrap">
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/841668545455a0f69684c4146fc4d2120b2b316c54a2b18700be7a3f15d406cb?"
                className="shrink-0 w-6 aspect-square"
              />
              <div className="my-auto">Explore</div>
            </div>
            <div className="flex gap-3 justify-center px-4 py-3 mt-3 whitespace-nowrap">
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/8d834acf9e4ea5ecd415a1151836dbc0154213cba04793a738cea2f2dbd380f7?"
                className="shrink-0 w-6 aspect-square"
              />
              <div className="my-auto">Message</div>
            </div>
            <div className="flex gap-3 px-4 py-3 mt-3 whitespace-nowrap">
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/69b45b3b149be7445dd6f82eb087c384b9a8a8290f55a8e5374d14978ff1719b?"
                className="shrink-0 w-6 aspect-square"
              />
              <div className="my-auto">Support</div>
            </div>
            <div className="flex gap-3 justify-center px-4 py-3 mt-3 whitespace-nowrap">
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/443240255720dbf65051355745056d04c512ba60cf765906684051e6d21ef310?"
                className="shrink-0 w-6 aspect-square"
              />
              <div className="my-auto">Setting</div>
            </div>
            <div className="flex gap-3 justify-center px-4 py-3 mt-60 text-neutral-500">
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/f64d77e856b4839f28bbe286b3d6f40b65a5729b6b74031283abacc2a1fb7f20?"
                className="shrink-0 w-6 aspect-square"
              />
              <div className="my-auto">Dark mode</div>
            </div>
            <div className="flex gap-3 justify-center px-4 py-3 mt-3 whitespace-nowrap">
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/2dff327cf56b3512801ac08efebbc00c31c0d7e7caa92643fdd684aa8038e5b5?"
                className="shrink-0 w-6 aspect-square"
              />
              <div className="my-auto">Logout</div>
            </div>
          </div>
        </div> */}

        <div className='flex-col mt-10 ml-24'>

          <div className="flex flex-col max-w-[935px]">
            <div className="flex gap-5 px-5 w-full text-xl font-semibold text-black max-md:flex-wrap max-md:max-w-full">
              <div className="flex-auto">Upcoming trips</div>
              <div className="flex-auto">Calendar</div>
            </div>
            <div className="mt-4 w-full max-md:max-w-full">
              <div className="flex gap-5 max-md:flex-col max-md:gap-0">
                <div className="flex flex-col w-[61%] max-md:ml-0 max-md:w-full">
                  <div className="grow py-2 pr-6 pl-2.5 w-full bg-white rounded-xl shadow-lg max-md:pr-5 max-md:mt-6 max-md:max-w-full">
                    <div className="flex gap-5 max-md:flex-col max-md:gap-0">
                      <div className="flex flex-col w-6/12 max-md:ml-0 max-md:w-full">
                        <div className="flex overflow-hidden relative flex-col grow gap-5 justify-between items-end px-3 pt-20 pb-1 w-full font-medium text-black aspect-[1.12] max-md:mt-6">
                          <img
                            loading="lazy"
                            srcSet="..."
                            className="object-cover absolute inset-0 size-full"
                          />
                          <div className="flex relative gap-1 mt-28 text-sm max-md:mt-10">
                            <img
                              loading="lazy"
                              src="https://cdn.builder.io/api/v1/image/assets/TEMP/05ffd1ec676773f6336b770a19991c8e4c65b4eefdca929cef26eb1523a79825?"
                              className="shrink-0 w-6 aspect-square"
                            />
                            <div className="my-auto">South Korea</div>
                          </div>
                          <div className="flex relative gap-1 mt-28 text-xs whitespace-nowrap max-md:mt-10">
                            <img
                              loading="lazy"
                              src="https://cdn.builder.io/api/v1/image/assets/TEMP/746d33d2777e6ea13b63faa25ea928bfb6ec907156060267d3d6663373d4d425?"
                              className="shrink-0 w-6 aspect-square"
                            />
                            <div className="my-auto">4.9</div>
                          </div>
                        </div>
                      </div>
                      <div className="flex flex-col ml-5 w-6/12 max-md:ml-0 max-md:w-full">
                        <div className="flex flex-col mt-3.5 text-sm max-md:mt-9">
                          <div className="font-semibold text-black">
                            Cherry blossom Seoul tour
                          </div>
                          <div className="flex gap-1 mt-3 text-black">
                            <div className="flex gap-1 justify-center px-1 py-1.5 bg-gray-100 rounded">
                              <img
                                loading="lazy"
                                src="https://cdn.builder.io/api/v1/image/assets/TEMP/4527e1c7897b8a30a20c8425c4dda6696d7faf8d917910b51230a697d017ead4?"
                                className="shrink-0 w-4 aspect-square"
                              />
                              <div>23 Mar - 28 Mar</div>
                            </div>
                            <div className="flex gap-1 px-1 py-1.5 whitespace-nowrap bg-gray-100 rounded">
                              <img
                                loading="lazy"
                                src="https://cdn.builder.io/api/v1/image/assets/TEMP/0ecb1ec7b14d4a52c34baebf0943e7a0d09f474f305f84f53af3f446fd07b11d?"
                                className="shrink-0 w-4 aspect-square"
                              />
                              <div>Myeongdong</div>
                            </div>
                          </div>
                          <div className="mt-3.5 text-xs text-neutral-500">
                            It’s springtime in Korea, which means some very welcome
                            warmer weather. It also means cherry blossom season! ...
                          </div>
                          <div className="flex gap-1 px-2 py-0.5 mt-3.5 text-cyan-500 rounded-lg border border-solid border-neutral-500 max-md:mr-2">
                            <img
                              loading="lazy"
                              src="https://cdn.builder.io/api/v1/image/assets/TEMP/93d44d27405ba6caa16f005ac76f07cdd72fff92df36345cd8159b6c601b352b?"
                              className="shrink-0 w-6 aspect-square"
                            />
                            <div className="flex-auto my-auto">
                              <span className="text-xs">From</span>{" "}
                              <span className="font-medium text-cyan-500">
                                Ha Noi (VN)
                              </span>{" "}
                              <span className="text-xs">to</span>{" "}
                              <span className="font-medium text-cyan-500">
                                Seoul (SK)
                              </span>{" "}
                            </div>
                          </div>
                          <div className="flex gap-3 mt-3 text-xs font-medium text-white max-md:mr-2">
                            <div className="justify-center items-center px-4 py-2.5 bg-cyan-500 rounded-xl max-md:px-5">
                              View detail
                            </div>
                            <img
                              loading="lazy"
                              src="https://cdn.builder.io/api/v1/image/assets/TEMP/00dc8e0f1bc2edd029f178ae20d36ba019ce0f3baab611ed417a105537ec6d8e?"
                              className="shrink-0 aspect-[1.03] w-[37px]"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col ml-5 w-[39%] max-md:ml-0 max-md:w-full">
                  <div className="flex flex-col grow px-6 py-6 mx-auto w-full text-xs bg-white rounded-xl shadow-lg max-md:px-5 max-md:mt-6">
                    <div className="flex gap-5 justify-between w-full text-sm tracking-normal">
                      <div className="my-auto font-semibold text-black uppercase">
                        Activity
                      </div>
                      <div className="flex gap-2 items-center font-medium text-cyan-500">
                        <img
                          loading="lazy"
                          src="https://cdn.builder.io/api/v1/image/assets/TEMP/f37c6ffbb438c0a000dccc2f5239c06e4fff4f30d4392509bf38ef4fc203ef8a?"
                          className="shrink-0 self-stretch my-auto w-1.5 aspect-[0.6] fill-slate-500"
                        />
                        <div className="self-stretch my-auto">MAR 2022</div>
                        <img
                          loading="lazy"
                          src="https://cdn.builder.io/api/v1/image/assets/TEMP/1f1695ce95737305a4ffa20f678ef3f64b47dab88e93458867e97c052503f16d?"
                          className="shrink-0 self-stretch w-4 aspect-square"
                        />
                      </div>
                    </div>
                    <div className="flex gap-5 mt-7 text-xs font-medium text-center text-gray-500 uppercase whitespace-nowrap">
                      <div className="flex-1">Sun</div>
                      <div className="flex-1">Mon</div>
                      <div className="flex-1">tue</div>
                      <div className="flex-1">wed</div>
                      <div className="flex-1">thu</div>
                      <div className="flex-1">fri</div>
                      <div className="flex-1">sat</div>
                    </div>
                    <div className="flex gap-5 justify-between mx-3.5 mt-5 font-medium text-center text-black uppercase whitespace-nowrap max-md:mx-2.5">
                      <div>1</div>
                      <div>2</div>
                      <div>3</div>
                      <div>4</div>
                      <div>5</div>
                      <div>6</div>
                      <div>7</div>
                    </div>
                    <div className="flex gap-5 justify-between mt-4 mr-3 ml-3 text-center text-black uppercase whitespace-nowrap max-md:mx-2.5">
                      <div>8</div>
                      <div>9</div>
                      <div>10</div>
                      <div>11</div>
                      <div>12</div>
                      <div>13</div>
                      <div>14</div>
                    </div>
                    <div className="flex gap-5 justify-between mt-4 text-center text-black uppercase whitespace-nowrap max-md:pr-5">
                      <div>15</div>
                      <div>16</div>
                      <div>17</div>
                      <div>18</div>
                      <div>19</div>
                      <div>20</div>
                      <div>21</div>
                    </div>
                    <div className="flex gap-5 mt-2 text-center text-black uppercase whitespace-nowrap max-md:mr-1.5 max-md:ml-1.5">
                      <div className="my-auto">22</div>
                      <div className="flex flex-auto gap-5 justify-between px-1 py-1 bg-sky-100 rounded-[100px]">
                        <div className="justify-center items-center px-1 w-5 h-5 bg-cyan-500 rounded-full">
                          23
                        </div>
                        <div className="justify-center items-center px-1 w-5 h-5 bg-white rounded-full">
                          24
                        </div>
                        <div className="justify-center items-center px-1 w-5 h-5 bg-white rounded-full">
                          25
                        </div>
                        <div className="justify-center items-center px-1 w-5 h-5 bg-white rounded-full">
                          26
                        </div>
                        <div className="justify-center items-center px-1 w-5 h-5 bg-white rounded-full">
                          27
                        </div>
                        <div className="justify-center items-center px-1 w-5 h-5 bg-cyan-500 rounded-full">
                          28
                        </div>
                      </div>
                    </div>
                    <div className="flex gap-5 mt-2 text-center text-black uppercase whitespace-nowrap">
                      <div>29</div>
                      <div>30</div>
                      <div className="flex-auto">31</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="max-w-[934px] mt-10">
            <div className="flex gap-5 max-md:flex-col max-md:gap-0">
              <div className="flex flex-col w-6/12 max-md:ml-0 max-md:w-full">
                <div className="flex flex-col grow px-5 max-md:mt-5 max-md:max-w-full">
                  <div className="text-xl font-semibold text-black max-md:max-w-full">
                    Trips exclusively for you
                  </div>
                  <div className="mt-4 max-md:max-w-full">
                    <div className="flex gap-5 max-md:flex-col max-md:gap-0">
                      <div className="flex flex-col w-6/12 max-md:ml-0 max-md:w-full">
                        <div className="flex flex-col grow pr-2 pb-3 mx-auto w-full text-xs bg-white rounded-xl shadow-lg max-md:mt-4">
                          <img
                            loading="lazy"
                            srcSet="..."
                            className="self-center w-52 aspect-[1.32]"
                          />
                          <div className="flex gap-5 justify-between items-start px-px mt-3 text-sm font-semibold">
                            <div className="flex flex-col">
                              <div className="text-black">Nha Trang (Vietnam)</div>
                              <div className="flex gap-0 mt-1 text-neutral-500">
                                <img
                                  loading="lazy"
                                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/1a392f3999234a2af9c8f6109c617ea397cb37db77b93a03b753dc15b7b3548e?"
                                  className="shrink-0 w-6 aspect-square"
                                />
                                <div className="flex-auto my-auto">
                                  750{" "}
                                  <span className="line-through  text-neutral-500">
                                    (999)
                                  </span>
                                </div>
                              </div>
                            </div>
                            <img
                              loading="lazy"
                              src="https://cdn.builder.io/api/v1/image/assets/TEMP/30f931a1b90c769263fc7e50c71f8fed1c96c6b31c12371d373e8a87cb1f8327?"
                              className="shrink-0 w-9 aspect-square"
                            />
                          </div>
                          <div className="mt-1.5 text-neutral-500">
                            Nha Trang has many famous tourist attractions and is a big
                            tourist center of the country...
                          </div>
                          <div className="flex gap-5 mt-2.5 w-full font-medium text-black whitespace-nowrap">
                            <div className="flex flex-1 gap-1">
                              <img
                                loading="lazy"
                                src="https://cdn.builder.io/api/v1/image/assets/TEMP/746d33d2777e6ea13b63faa25ea928bfb6ec907156060267d3d6663373d4d425?"
                                className="shrink-0 w-6 aspect-square"
                              />
                              <div className="my-auto">4.9</div>
                            </div>
                            <div className="flex flex-1 gap-1 my-auto">
                              <img
                                loading="lazy"
                                src="https://cdn.builder.io/api/v1/image/assets/TEMP/380457ff06d6f2d1426be9b29c79dadc5d680f3c1bfea6c92030a594b5f333fc?"
                                className="shrink-0 w-4 aspect-square"
                              />
                              <div className="my-auto">(1,022)</div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="flex flex-col ml-5 w-6/12 max-md:ml-0 max-md:w-full">
                        <div className="flex flex-col grow pr-2 pb-3 mx-auto w-full text-xs bg-white rounded-xl shadow-lg max-md:mt-4">
                          <img
                            loading="lazy"
                            srcSet="..."
                            className="self-center w-52 aspect-[1.32]"
                          />
                          <div className="flex gap-5 justify-between items-start px-0.5 mt-3 text-sm font-semibold">
                            <div className="flex flex-col">
                              <div className="text-black">Paris (France)</div>
                              <div className="flex gap-0 mt-1 text-neutral-500">
                                <img
                                  loading="lazy"
                                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/1a392f3999234a2af9c8f6109c617ea397cb37db77b93a03b753dc15b7b3548e?"
                                  className="shrink-0 w-6 aspect-square"
                                />
                                <div className="my-auto">
                                  750{" "}
                                  <span className="line-through  text-neutral-500">
                                    (999)
                                  </span>
                                </div>
                              </div>
                            </div>
                            <img
                              loading="lazy"
                              src="https://cdn.builder.io/api/v1/image/assets/TEMP/30f931a1b90c769263fc7e50c71f8fed1c96c6b31c12371d373e8a87cb1f8327?"
                              className="shrink-0 w-9 aspect-square"
                            />
                          </div>
                          <div className="mt-1.5 text-neutral-500">
                            Nha Trang has many famous tourist attractions and is a big
                            tourist center of the country...
                          </div>
                          <div className="flex gap-5 mt-2.5 w-full font-medium text-black whitespace-nowrap">
                            <div className="flex flex-1 gap-1">
                              <img
                                loading="lazy"
                                src="https://cdn.builder.io/api/v1/image/assets/TEMP/746d33d2777e6ea13b63faa25ea928bfb6ec907156060267d3d6663373d4d425?"
                                className="shrink-0 w-6 aspect-square"
                              />
                              <div className="my-auto">4.9</div>
                            </div>
                            <div className="flex flex-1 gap-1 my-auto">
                              <img
                                loading="lazy"
                                src="https://cdn.builder.io/api/v1/image/assets/TEMP/380457ff06d6f2d1426be9b29c79dadc5d680f3c1bfea6c92030a594b5f333fc?"
                                className="shrink-0 w-4 aspect-square"
                              />
                              <div className="my-auto">(1,022)</div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex flex-col ml-5 w-6/12 max-md:ml-0 max-md:w-full">
                <div className="flex flex-col grow text-black max-md:mt-4 max-md:max-w-full">
                  <div className="flex gap-5 justify-between self-start ml-14 max-md:ml-2.5">
                    <div className="text-sm">See all</div>
                    <div className="text-xl font-semibold">Done trips</div>
                  </div>
                  <img
                    loading="lazy"
                    srcSet="..."
                    className="mt-3.5 w-full rounded-xl shadow-lg aspect-[1.52] max-md:max-w-full"
                  />
                </div>
              </div>
            </div>
          </div>

        </div>


      </div>



      <Footer />
    </>

  )
}

export default Dashboard
