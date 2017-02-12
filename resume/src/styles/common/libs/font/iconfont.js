;(function(window) {

  var svgSprite = '<svg>' +
    '' +
    '<symbol id="icon-heart" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M934.17472 168.48896c-116.1216-115.07712-301.81376-117.47328-422.11328-9.216-120.32-108.25728-305.95072-105.86112-422.15424 9.216-119.7056 118.51776-119.7056 310.6816 0 429.28128 34.2016 33.8944 353.6896 350.1056 353.6896 350.1056 37.84704 37.49888 99.06176 37.49888 136.88832 0 0 0 349.81888-346.29632 353.6896-350.1056 119.74656-118.59968 119.74656-310.74304-0.04096-429.28128zM888.58624 552.57088l-353.6896 350.1056c-12.57472 12.51328-33.09568 12.51328-45.60896 0l-353.6896-350.1056c-94.39232-93.45024-94.39232-245.47328 0-338.90304 91.01312-90.07104 237.32224-93.24544 333.08672-7.10656l43.39712 39.03488 43.35616-39.03488c95.80544-86.13888 242.11456-83.00544 333.12768 7.10656 94.39232 93.40928 94.39232 245.43232 0.04096 338.90304zM296.09984 240.0256c8.86784 0 15.99488 7.168 15.99488 15.99488s-7.168 15.99488-15.99488 15.99488l-0.04096 0c-57.40544 0-103.97696 46.55104-103.97696 103.97696l0 0.04096c0 8.82688-7.168 15.99488-15.99488 15.99488s-15.99488-7.168-15.99488-15.99488l0 0c0-75.07968 60.8256-135.90528 135.86432-135.96672 0.06144 0 0.06144-0.04096 0.12288-0.04096z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-study" viewBox="0 0 1025 1024">' +
    '' +
    '<path d="M1024 256c0-44.99456-30.6176-83.456-74.42432-93.57312l-416.41984-96.09216c-6.98368-1.57696-14.09024-2.33472-21.15584-2.33472s-14.17216 0.75776-21.6064 2.43712l-415.96928 96.01024c-43.84768 10.11712-74.42432 48.57856-74.42432 93.57312s30.6176 83.456 74.40384 93.57312l85.6064 19.74272 0 270.68416c0 84.93056 97.21856 160.01024 352.01024 160.01024s352.01024-75.07968 352.01024-160.01024l0-270.68416 85.56544-19.74272c43.80672-10.11712 74.42432-48.57856 74.42432-93.57312zM800.01024 640c0 35.36896-96.01024 96.01024-288.01024 96.01024s-288.01024-60.64128-288.01024-96.01024l0-255.8976 266.81344 61.56288c6.98368 1.57696 14.11072 2.33472 21.17632 2.33472s14.21312-0.75776 21.56544-2.43712l266.42432-61.48096 0 255.8976zM519.20896 383.20128c-2.39616 0.512-4.79232 0.79872-7.20896 0.79872s-4.83328-0.28672-7.20896-0.79872l-416.01024-96.01024c-14.52032-3.35872-24.80128-16.2816-24.80128-31.19104s10.28096-27.83232 24.80128-31.19104l416.01024-95.98976c2.37568-0.512 4.77184-0.79872 7.20896-0.79872s4.83328 0.28672 7.20896 0.79872l415.98976 95.98976c14.49984 3.35872 24.80128 16.2816 24.80128 31.19104s-10.30144 27.83232-24.80128 31.19104l-415.98976 96.01024zM928.01024 416.01024c0-17.69472 14.29504-32.01024 32.01024-32.01024 17.65376 0 32.01024 14.29504 32.01024 32.01024l0 288.01024c0 17.69472-14.336 32.01024-32.01024 32.01024-17.69472 0-32.01024-14.29504-32.01024-32.01024l0-288.01024zM960 768c35.328 0 64 92.672 64 128s-28.672 64-64 64c-35.36896 0-64-28.672-64-64s28.63104-128 64-128z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-mail" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M896 160.01024l-768 0c-70.69696 0-128 57.344-128 128l0 416.01024c0 70.69696 57.30304 128 128 128l768 0c70.69696 0 128-57.30304 128-128l0-416.01024c0-70.656-57.30304-128-128-128zM64 328.00768l223.96928 167.99744-223.96928 167.99744 0-335.99488zM960 704c0 35.328-28.73344 64-64 64l-768 0c-35.28704 0-64-28.672-64-64l250.63424-188.0064 139.776 104.8576c17.05984 12.73856 37.31456 19.21024 57.61024 19.21024 20.25472 0 40.50944-6.43072 57.56928-19.21024l139.81696-104.8576 250.63424 188.0064zM960 664.00256l-224.01024-167.99744 224.01024-167.99744 0 335.99488zM550.35904 595.27168c-11.1616 8.37632-24.41216 12.8-38.35904 12.8s-27.2384-4.44416-38.4-12.8l-409.6-307.26144c0-35.28704 28.71296-64 64-64l768 0c35.26656 0 64 28.71296 64 64l-409.64096 307.26144z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-user" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M917.965523 917.331585c0 22.469758-17.891486 40.699957-39.913035 40.699957-22.058388 0-39.913035-18.2302-39.913035-40.699957l-0.075725-0.490164-1.087774 0c-18.945491-157.665903-148.177807-280.296871-306.821991-285.4748-3.412726 0.151449-6.751774 0.562818-10.240225 0.562818-3.450589 0-6.789637-0.410346-10.202363-0.524956-158.606321 5.139044-287.839661 127.806851-306.784128 285.436938l-1.014096 0 0.075725 0.490164c0 22.469758-17.854647 40.699957-39.913035 40.699957s-39.915082-18.2302-39.915082-40.699957l-0.373507-3.789303c0-6.751774 2.026146-12.903891 4.91494-18.531052 21.082154-140.712789 111.075795-258.241552 235.432057-312.784796C288.420387 530.831904 239.989351 444.515003 239.989351 346.604042c0-157.591201 125.33352-285.361213 279.924387-285.361213 154.62873 0 279.960203 127.770012 279.960203 285.361213 0 97.873098-48.391127 184.15316-122.103966 235.545644 124.843356 54.732555 215.099986 172.863023 235.808634 314.211285 2.437515 5.290493 4.01443 10.992355 4.01443 17.181311L917.965523 917.331585zM719.822744 346.679767c0-112.576985-89.544409-203.808826-199.983707-203.808826-110.402459 0-199.944821 91.232864-199.944821 203.808826s89.542362 203.808826 199.944821 203.808826C630.278335 550.488593 719.822744 459.256752 719.822744 346.679767z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-backicon1" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M721.226 845.716l-330.925-336.576 328.476-341.301c8.349-8.349 8.124-22.074-0.5-30.65l-59.175-59.175c-8.6-8.574-22.325-8.825-30.675-0.474l-334.326 347.4c-4.425 0.775-8.751 2.499-12.174 5.95l-59.775 59.75c-8.7 8.675-8.9 22.524-0.5 30.925l408.351 415.35c8.425 8.425 22.275 8.2 30.95-0.474l59.775-59.8c8.65-8.65 8.9-22.524 0.5-30.925z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-phone" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M227.371 933.875c-24.753 0-48.022-9.744-65.503-27.371l-23.444-23.706c-102.443-103.492-20.070-348.838 187.523-558.525 142.961-144.387 308.581-234.062 432.259-234.062 50.058 0 91.827 15.445 120.74 44.647l23.415 23.677c17.511 17.656 27.167 41.157 27.167 66.172s-9.657 48.488-27.196 66.143l-93.718 94.706c-34.992 35.37-96.045 35.312-131.007 0l-23.444-23.677c-7.534-7.621-17.219-11.344-29.581-11.344-23.386 0-76.266 13.787-167.627 106.051-107.273 108.319-118.762 173.91-93.775 199.187l23.473 23.677c36.097 36.503 36.097 95.841 0 132.287l-93.775 94.735c-17.511 17.655-40.779 27.4-65.503 27.4zM758.205 143.412c-108.552 0-263.613 85.718-395.028 218.471-180.514 182.316-266.378 403.638-187.523 483.307l23.415 23.677c15.125 15.212 41.42 15.242 56.603-0.029l93.747-94.706c15.562-15.736 15.562-41.333 0-57.068l-23.474-23.677c-26.73-27.051-71.118-107.883 93.775-274.405 79.901-80.687 148.837-121.612 204.858-121.612 26.323 0 49.389 9.308 66.812 26.905l23.444 23.677c15.125 15.299 41.42 15.242 56.544 0l93.747-94.735c7.562-7.621 11.722-17.742 11.722-28.506 0-10.792-4.16-20.943-11.722-28.563l-23.415-23.677c-19.11-19.314-47.208-29.058-83.509-29.058z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-xiangzuo1" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M671.968176 911.99957c-12.287381 0-24.576482-4.67206-33.951566-14.047144L286.048434 545.984249c-18.751888-18.719204-18.751888-49.12028 0-67.872168L638.016611 126.111222c18.751888-18.751888 49.12028-18.751888 67.872168 0 18.751888 18.719204 18.751888 49.12028 0 67.872168l-318.016611 318.047574L705.888778 830.047574c18.751888 18.751888 18.751888 49.12028 0 67.872168C696.544658 907.32751 684.255557 911.99957 671.968176 911.99957z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-add" viewBox="0 0 1025 1024">' +
    '' +
    '<path d="M482.999 483.457v-8.588c0-109.098-0.008-218.2 0.011-327.297 0.005-14.223 6.694-24.505 18.563-28.789 17.465-6.301 36.32 5.997 37.622 24.573 0.176 2.522 0.093 5.062 0.098 7.595 0.005 108.318 0.005 216.64 0.005 324.959v7.544h7.938c108.514 0 217.030-0.016 325.544 0.055 4.247 0.005 8.65 0.215 12.719 1.305 12.871 3.46 20.968 15.676 19.966 29.361-0.958 13.066-11.007 23.679-24.163 25.328-3.078 0.386-6.216 0.414-9.328 0.414-107.929 0.020-215.862 0.016-323.791 0.016h-8.888v7.817c0 109.293 0.008 218.589-0.008 327.883-0.005 15.801-8.261 26.821-22.354 30.066-16.308 3.752-32.817-8.573-33.831-25.297-0.141-2.33-0.093-4.673-0.093-7.010-0.005-108.318-0.005-216.64-0.005-324.959v-8.101c-3.086-0.148-5.72-0.377-8.354-0.382-108.709-0.020-217.42-0.051-326.129 0.043-10.528 0.007-19.658-2.544-26.263-11.229-12.834-16.881-3.223-41.176 17.706-44.671 3.242-0.542 6.589-0.608 9.891-0.608 108.318-0.031 216.64-0.023 324.959-0.023h8.187z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-discoverline" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M511.094661 2.570987C794.254833 3.761991 1017.139639 231.274575 1020.018266 506.15485 1023.002369 791.152069 792.338678 1020.422592 511.375931 1020.5017 231.243811 1020.576412 2.768755 793.274781 2.258953 513.085528 1.744755 231.344893 229.125494 3.212635 511.094661 2.570987L511.094661 2.570987ZM511.353957 956.662112C756.687657 956.56103 955.207416 757.992927 955.888618 512.026369 956.56982 266.196052 757.390833 66.731399 511.27485 66.779742 265.365425 66.823691 66.894009 265.677459 66.463313 511.674781 66.037013 752.710318 260.689305 955.660086 511.353957 956.662112L511.353957 956.662112Z"  ></path>' +
    '' +
    '<path d="M257.410747 798.42115C233.489579 797.739948 218.388876 774.218712 228.299262 752.095039 244.353648 716.263828 260.746438 680.582043 276.994197 644.834335 312.847382 565.955571 348.801648 487.116361 384.44388 408.14091 389.330953 397.316395 396.459399 389.976996 407.336652 385.050369 521.444532 333.415279 635.429356 281.503313 749.458129 229.688034 770.6457 220.058918 791.70582 229.477082 796.566524 250.655863 798.487073 259.023657 796.258884 266.653116 792.817717 274.221047 745.75327 377.631863 698.750352 481.069047 651.729854 584.497442 646.645013 595.67794 641.410747 606.79691 636.5017 618.05212 632.713339 626.736343 626.674815 632.801236 618.016961 636.730232 502.573047 689.138815 387.181871 741.661665 271.724773 794.039485 267.220052 796.08309 262.192343 796.988429 257.410747 798.42115L257.410747 798.42115ZM701.290575 321.799691C698.644876 322.819296 697.436292 323.214833 696.289236 323.733425 612.220155 361.937854 528.137888 400.115914 444.156704 438.509322 441.361579 439.788223 438.768618 442.908567 437.450163 445.795983 405.622661 515.419193 373.979742 585.125906 342.30606 654.819433 335.441305 669.920137 328.589734 685.029631 321.149253 701.418026 324.335519 700.13473 326.304412 699.422764 328.202987 698.561373 411.278833 660.814009 494.363468 623.088618 577.351416 585.14788 580.366283 583.767897 583.394335 580.735451 584.778712 577.720584 606.21679 531.082438 627.377991 484.312446 648.6183 437.586403 665.951588 399.461082 683.302455 361.340155 701.290575 321.799691L701.290575 321.799691Z"  ></path>' +
    '' +
    '<path d="M542.882609 512.039554C542.72879 529.684876 528.304893 543.651708 510.602438 543.30012 493.12412 542.952927 479.429768 528.9817 479.451742 511.520961 479.473717 494.029459 494.033854 479.574798 511.450644 479.763777 528.968515 479.95715 543.040824 494.403021 542.882609 512.039554L542.882609 512.039554Z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-endorse" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M34.205358 513.272954C34.205358 378.466642 34.195963 243.66033 34.210055 108.849321 34.214752 54.229725 69.852771 12.687266 123.645651 4.687853 128.263046 4.002055 133.007266 3.969174 137.695119 3.969174 306.321615 3.936294 474.94811 3.931596 643.574606 3.950385 659.639193 3.950385 671.701725 11.404917 677.080073 24.961174 682.44433 38.493945 679.921908 50.810128 670.067083 61.444697 664.068697 67.917505 656.426275 71.257248 647.586055 71.684697 644.537541 71.830312 641.479633 71.792734 638.431119 71.792734 472.622972 71.797431 306.814826 71.797431 141.006679 71.797431 115.33622 71.797431 102.043009 85.137615 102.043009 110.911413L102.043009 916.231046C102.043009 942.037725 115.246972 955.236991 141.053651 955.236991L810.392661 955.236991C836.608 955.236991 849.764991 942.098789 849.769688 915.808294 849.78378 771.842349 849.802569 627.876404 849.718018 483.905761 849.713321 474.727339 850.944 466.168954 856.824954 458.742606 865.636991 447.614826 879.954202 442.992734 893.430606 447.02767 906.963376 451.081394 916.583339 463.27545 917.579156 477.714789 917.724771 479.819156 917.649615 481.942312 917.649615 484.056073 917.649615 628.961468 917.663706 773.866862 917.644917 918.776954 917.64022 972.10011 882.251156 1013.76 829.665468 1022.177468 823.906642 1023.098128 817.964624 1023.098128 812.107156 1023.098128 588.057835 1023.140404 364.003817 1022.806899 139.954495 1023.379963 87.866716 1023.511486 45.816954 988.376073 36.431853 942.16455 34.858275 934.409394 34.304 926.325431 34.294606 918.396477 34.172477 783.355303 34.205358 648.314128 34.205358 513.272954L34.205358 513.272954Z"  ></path>' +
    '' +
    '<path d="M987.347376 106.467817C984.082789 113.52778 980.968514 120.662899 977.464367 127.600734 976.449761 129.606459 974.359486 131.086092 972.701358 132.74422 827.448367 278.011303 682.17189 423.254899 536.970569 568.568954 527.397578 578.146642 516.725431 583.581358 502.882642 580.654972 477.879193 575.370569 467.437211 545.716844 483.675596 525.993101 485.164624 524.184661 486.832147 522.517138 488.490275 520.859009 633.90767 375.427523 779.325064 230.000734 924.75655 84.592734 941.290862 68.063119 962.588183 67.504147 976.778569 83.169468 982.528 89.520147 985.374532 97.04044 985.520147 105.584734 986.130789 105.875963 986.741431 106.17189 987.347376 106.467817L987.347376 106.467817Z"  ></path>' +
    '' +
    '<path d="M373.116477 377.555376C339.310385 377.560073 305.508991 377.705688 271.707596 377.489615 257.794349 377.400367 247.357064 370.716183 241.443229 358.146349 235.548183 345.614092 237.032514 333.377761 245.600294 322.428477 252.021431 314.222385 260.74422 309.816367 271.219083 309.802275 339.766018 309.722422 408.312954 309.628477 476.855193 309.858642 495.315376 309.919706 509.595009 325.03545 509.735927 343.411083 509.881541 362.040367 495.446899 377.311119 476.639119 377.466128 442.133138 377.757358 407.627156 377.550679 373.116477 377.555376L373.116477 377.555376Z"  ></path>' +
    '' +
    '<path d="M322.982752 513.80844C340.80411 513.80844 358.644257 513.376294 376.446826 513.944661 390.500991 514.395596 402.140771 523.813578 406.147523 537.022239 410.346862 550.869725 407.016514 562.998018 396.419523 572.881028 389.965505 578.902899 381.994275 581.570936 373.266789 581.589725 339.72844 581.669578 306.185394 581.810495 272.647046 581.552147 253.031339 581.401835 238.432294 566.86855 238.155156 548.056073 237.878018 529.140257 251.889908 514.367413 271.623046 513.766165 288.730422 513.244771 305.861284 513.658128 322.982752 513.658128 322.982752 513.709798 322.982752 513.756771 322.982752 513.80844L322.982752 513.80844Z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-icon-test" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M985.368 557.457c-35.446-34.361-78.686-58.647-125.171-70.226-1.183-0.638-2.496-1.014-3.847-1.014h-4.241c-1.313 0-2.628 0.356-3.828 0.997-14.039 7.506-33.255 11.86-52.812 11.86-19.515 0-38.809-4.354-52.844-11.86-1.183-0.64-2.518-0.997-3.83-0.997h-3.056c-0.621 0-1.259 0.095-1.859 0.207-20.702 4.916-40.685 12.48-59.734 22.144-9.816 34.116-28.657 66.695-54.104 91.694H979.74a8.088 8.088 0 0 0 8.086-8.09v-28.881a8.125 8.125 0 0 0-2.458-5.834zM704.605 358.211c0 8.669 6.644 15.764 14.824 15.764h0.28c3.061 41.548 35.808 83.098 75.76 83.098 39.972 0 72.685-41.55 75.782-83.098h0.224c8.22 0 14.901-7.095 14.901-15.764 0-6.417-3.643-11.935-8.803-14.413a97.083 97.083 0 0 0 4.638-29.726c0-50.783-38.812-91.956-86.742-91.956-47.909 0-86.739 41.173-86.739 91.956 0 10.434 1.652 20.437 4.655 29.726-5.195 2.478-8.78 7.996-8.78 14.413zM352.713 505.902c-16.533-7.994-33.761-14.279-51.457-18.671-1.183-0.638-2.515-1.014-3.847-1.014h-4.223c-1.313 0-2.628 0.356-3.81 0.997-14.074 7.506-33.292 11.86-52.827 11.86-19.537 0-38.829-4.354-52.866-11.86-1.181-0.64-2.496-0.997-3.829-0.997h-3.058c-0.62 0-1.258 0.095-1.859 0.207-47.742 11.334-92.069 35.919-128.345 71.032-1.537 1.557-2.42 3.659-2.42 5.835v28.881a8.082 8.082 0 0 0 8.107 8.09h355.23c-26.101-25.636-45.206-59.339-54.796-94.36zM145.662 358.211c0 8.669 6.644 15.764 14.826 15.764h0.301c3.058 41.548 35.769 83.098 75.761 83.098 39.954 0 72.682-41.55 75.76-83.098h0.225c8.239 0 14.881-7.095 14.881-15.764 0-6.417-3.622-11.935-8.764-14.413a97.655 97.655 0 0 0 4.617-29.726c0-50.783-38.827-91.956-86.719-91.956-47.912 0-86.758 41.173-86.758 91.956 0 10.434 1.651 20.437 4.654 29.726-5.18 2.478-8.784 7.996-8.784 14.413zM358.587 439.544c0 14.902 11.335 26.951 25.354 26.951 0.168 0 0.319-0.039 0.45-0.039 1.971 26.649 11.073 53.224 25.297 76.157 5.63 9.043 12.124 17.376 19.199 25.031 22.744 24.528 52.396 40.763 84.899 40.763 34.718 0 66.209-18.466 89.479-45.826a164.365 164.365 0 0 0 8.145-10.399c17.887-24.847 29.501-55.248 31.791-85.726 0.111 0 0.282 0.039 0.45 0.039 13.998 0 25.354-12.049 25.354-26.951 0-10.92-6.176-20.34-15.033-24.543 5.125-15.934 7.938-32.957 7.938-50.745 0-86.777-66.3-157.114-148.123-157.114-81.822 0-148.124 70.337-148.124 157.114 0 17.789 2.833 34.812 7.938 50.745-8.858 4.203-15.014 13.623-15.014 24.543zM624.32 652.583c-1.988-1.124-4.259-1.654-6.567-1.654h-7.205c-2.271 0-4.543 0.53-6.514 1.618-24.002 12.874-56.881 20.23-90.248 20.23-33.367 0-66.246-7.395-90.229-20.23a13.795 13.795 0 0 0-6.531-1.618h-5.254c-1.051 0-2.14 0.095-3.171 0.341-81.503 19.291-157.263 61.253-219.1 121.307a13.676 13.676 0 0 0-4.221 9.869v49.359c0 7.62 6.173 13.774 13.831 13.774h629.392c7.599 0 13.774-6.154 13.774-13.774v-49.359c0-3.713-1.501-7.278-4.188-9.869C777.588 713.8 703.742 672.4 624.32 652.583z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-icon-test1" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M985.368 557.457c-35.446-34.361-78.686-58.647-125.171-70.226-1.183-0.638-2.496-1.014-3.847-1.014h-4.241c-1.313 0-2.628 0.356-3.828 0.997-14.039 7.506-33.255 11.86-52.812 11.86-19.515 0-38.809-4.354-52.844-11.86-1.183-0.64-2.518-0.997-3.83-0.997h-3.056c-0.621 0-1.259 0.095-1.859 0.207-20.702 4.916-40.685 12.48-59.734 22.144-9.816 34.116-28.657 66.695-54.104 91.694H979.74a8.088 8.088 0 0 0 8.086-8.09v-28.881a8.125 8.125 0 0 0-2.458-5.834zM704.605 358.211c0 8.669 6.644 15.764 14.824 15.764h0.28c3.061 41.548 35.808 83.098 75.76 83.098 39.972 0 72.685-41.55 75.782-83.098h0.224c8.22 0 14.901-7.095 14.901-15.764 0-6.417-3.643-11.935-8.803-14.413a97.083 97.083 0 0 0 4.638-29.726c0-50.783-38.812-91.956-86.742-91.956-47.909 0-86.739 41.173-86.739 91.956 0 10.434 1.652 20.437 4.655 29.726-5.195 2.478-8.78 7.996-8.78 14.413zM352.713 505.902c-16.533-7.994-33.761-14.279-51.457-18.671-1.183-0.638-2.515-1.014-3.847-1.014h-4.223c-1.313 0-2.628 0.356-3.81 0.997-14.074 7.506-33.292 11.86-52.827 11.86-19.537 0-38.829-4.354-52.866-11.86-1.181-0.64-2.496-0.997-3.829-0.997h-3.058c-0.62 0-1.258 0.095-1.859 0.207-47.742 11.334-92.069 35.919-128.345 71.032-1.537 1.557-2.42 3.659-2.42 5.835v28.881a8.082 8.082 0 0 0 8.107 8.09h355.23c-26.101-25.636-45.206-59.339-54.796-94.36zM145.662 358.211c0 8.669 6.644 15.764 14.826 15.764h0.301c3.058 41.548 35.769 83.098 75.761 83.098 39.954 0 72.682-41.55 75.76-83.098h0.225c8.239 0 14.881-7.095 14.881-15.764 0-6.417-3.622-11.935-8.764-14.413a97.655 97.655 0 0 0 4.617-29.726c0-50.783-38.827-91.956-86.719-91.956-47.912 0-86.758 41.173-86.758 91.956 0 10.434 1.651 20.437 4.654 29.726-5.18 2.478-8.784 7.996-8.784 14.413z m212.925 81.333c0 14.902 11.335 26.951 25.354 26.951 0.168 0 0.319-0.039 0.45-0.039 1.971 26.649 11.073 53.224 25.297 76.157 5.63 9.043 12.124 17.376 19.199 25.031 22.744 24.528 52.396 40.763 84.899 40.763 34.718 0 66.209-18.466 89.479-45.826a164.365 164.365 0 0 0 8.145-10.399c17.887-24.847 29.501-55.248 31.791-85.726 0.111 0 0.282 0.039 0.45 0.039 13.998 0 25.354-12.049 25.354-26.951 0-10.92-6.176-20.34-15.033-24.543 5.125-15.934 7.938-32.957 7.938-50.745 0-86.777-66.3-157.114-148.123-157.114-81.822 0-148.124 70.337-148.124 157.114 0 17.789 2.833 34.812 7.938 50.745-8.858 4.203-15.014 13.623-15.014 24.543zM624.32 652.583c-1.988-1.124-4.259-1.654-6.567-1.654h-7.205c-2.271 0-4.543 0.53-6.514 1.618-24.002 12.874-56.881 20.23-90.248 20.23-33.367 0-66.246-7.395-90.229-20.23a13.795 13.795 0 0 0-6.531-1.618h-5.254c-1.051 0-2.14 0.095-3.171 0.341-81.503 19.291-157.263 61.253-219.1 121.307a13.676 13.676 0 0 0-4.221 9.869v49.359c0 7.62 6.173 13.774 13.831 13.774h629.392c7.599 0 13.774-6.154 13.774-13.774v-49.359c0-3.713-1.501-7.278-4.188-9.869C777.588 713.8 703.742 672.4 624.32 652.583z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '</svg>'
  var script = function() {
    var scripts = document.getElementsByTagName('script')
    return scripts[scripts.length - 1]
  }()
  var shouldInjectCss = script.getAttribute("data-injectcss")

  /**
   * document ready
   */
  var ready = function(fn) {
    if (document.addEventListener) {
      if (~["complete", "loaded", "interactive"].indexOf(document.readyState)) {
        setTimeout(fn, 0)
      } else {
        var loadFn = function() {
          document.removeEventListener("DOMContentLoaded", loadFn, false)
          fn()
        }
        document.addEventListener("DOMContentLoaded", loadFn, false)
      }
    } else if (document.attachEvent) {
      IEContentLoaded(window, fn)
    }

    function IEContentLoaded(w, fn) {
      var d = w.document,
        done = false,
        // only fire once
        init = function() {
          if (!done) {
            done = true
            fn()
          }
        }
        // polling for no errors
      var polling = function() {
        try {
          // throws errors until after ondocumentready
          d.documentElement.doScroll('left')
        } catch (e) {
          setTimeout(polling, 50)
          return
        }
        // no errors, fire

        init()
      };

      polling()
        // trying to always fire before onload
      d.onreadystatechange = function() {
        if (d.readyState == 'complete') {
          d.onreadystatechange = null
          init()
        }
      }
    }
  }

  /**
   * Insert el before target
   *
   * @param {Element} el
   * @param {Element} target
   */

  var before = function(el, target) {
    target.parentNode.insertBefore(el, target)
  }

  /**
   * Prepend el to target
   *
   * @param {Element} el
   * @param {Element} target
   */

  var prepend = function(el, target) {
    if (target.firstChild) {
      before(el, target.firstChild)
    } else {
      target.appendChild(el)
    }
  }

  function appendSvg() {
    var div, svg

    div = document.createElement('div')
    div.innerHTML = svgSprite
    svgSprite = null
    svg = div.getElementsByTagName('svg')[0]
    if (svg) {
      svg.setAttribute('aria-hidden', 'true')
      svg.style.position = 'absolute'
      svg.style.width = 0
      svg.style.height = 0
      svg.style.overflow = 'hidden'
      prepend(svg, document.body)
    }
  }

  if (shouldInjectCss && !window.__iconfont__svg__cssinject__) {
    window.__iconfont__svg__cssinject__ = true
    try {
      document.write("<style>.svgfont {display: inline-block;width: 1em;height: 1em;fill: currentColor;vertical-align: -0.1em;font-size:16px;}</style>");
    } catch (e) {
      console && console.log(e)
    }
  }

  ready(appendSvg)


})(window)