const questionList = [
    {
        id: 1,
        quest: "Giải thuật tìm kiếm theo chiều rộng bắt đầu duyệt từ?",
        answer: ["Nút kề", "Nút gốc", "Nút con", "Nút cha"],
        correctAns: 1,
        image: null,
    },
    {
        id: 2,
        quest: "Nếu số đỉnh là hữu hạn thì giải thuật tìm kiếm theo chiều rộng có tìm ra kết quả không?",
        answer: ["Có", "Không"],
        correctAns: 0,
        image: null,
    },
    {
        id: 3,
        quest: "Không gian trạng thái là gì",
        answer: [
            "Không gian trạng thái là trạng thái đầu và trạng thái cuối",
            "Không gian trạng thái là trạng thái cuối",
            "Không gian trạng thái là tập tất cả các trạng thái có thể có của bài toán",
            "Không gian trạng thái là trạng thái đầu",
        ],
        correctAns: 2,
        image: null,
    },
    {
        id: 4,
        quest: "Tìm kiếm theo chiều sâu được viết tắt bởi:",
        answer: ["BFS", "SFD", "DFS", "SFB"],
        correctAns: 2,
        image: null,
    },
    {
        id: 5,
        quest: "Breath First Search là phương pháp tìm kiếm",
        answer: ["Tối ưu", "Leo đồi", "Chiều rộng", " Chiều sâu"],
        correctAns: 2,
        image: null,
    },
    {
        id: 6,
        quest: "Quá trình thăm đỉnh của đồ thị sau bằng phương pháp BFS, điểm bắt đầu là A",
        answer: ["A, B, C, D, E, G ", "A, B, D, G, E, C", "A, B, C, D, G, E", " A, B, E, G, D, C"],
        correctAns: 0,
        image: "./img/bai6.png",
    },
    {
        id: 7,
        quest: "Quá trình thăm đỉnh của đồ thị sau bằng phương pháp DFS",
        answer: [" A, B, D, C, S", "A, C, D, S, B", "B, C, D, A, S", "D, A, B, S, C"],
        correctAns: 2,
        image: "./img/bai7.png",
    },
    {
        id: 8,
        quest: "Hình ảnh của tìm kiếm theo chiều rộng",
        answer: ["Dòng suối chảy", "Vết dầu loang"],
        correctAns: 1,
        image: null,
    },
    {
        id: 9,
        quest: "Trong cây tìm kiếm, trạng thái xuất phát tương ứng với",
        answer: ["Nút của cây", "Lá của cây", "Gốc của cây "],
        correctAns: 2,
        image: null,
    },
    {
        id: 10,
        quest: "Đặc điểm của DFS",
        answer: [
            "Có tính hoàn chỉnh",
            "Có tính tối ưu",
            "Thuật toán có thể thất bại nếu không gian trạng thái có độ sâu vô hạn, hoặc chứa các vòng lặp giữa các trạng thái",
            "Không có tính tối ưu",
            "Đáp án sẽ là: C, D vì làm biếng code chọn nhiều =))",
        ],
        correctAns: 2,
        image: null,
    },
    {
        id: 11,
        quest: "Học máy là quá trình cải thiện hiệu suất của một hệ thống trong một công việc thông qua kinh nghiệm",
        answer: ["True", "False"],
        correctAns: 0,
        image: null,
    },
    {
        id: 12,
        quest: "Trong bài toán nhận dạng chữ viết tay, tập các ảnh chữ viết tay, trong đó mỗi ảnh được gắn với một định danh của một từ được gọi là gì",
        answer: [
            "Một công việc",
            "Một tập tiêu chí đánh giá hiệu năng",
            "Một tập kinh nghiệm",
            "Một tập dữ liệu đầu ra",
        ],
        correctAns: 2,
        image: null,
    },
    {
        id: 13,
        quest: "Đặc trưng X là một thuộc tính duy nhất của một lớp",
        answer: ["True", "False"],
        correctAns: 1,
        image: null,
    },
    {
        id: 14,
        quest: "Quá trình học máy gồm bao nhiêu bước cơ bản",
        answer: ["5", "6", "7", "8"],
        correctAns: 2,
        image: null,
    },
    {
        id: 15,
        quest: "Học máy được phân loại thành các nhóm nào",
        answer: [
            "Học có giám sát",
            "Học không giám sát ",
            "Học tăng cường",
            "Bài toán phân loại và hồi qui",
            "Đáp án sẽ là: A,B,C vì làm biếng code chọn nhiều =))",
        ],
        correctAns: 2,
        image: null,
    },
    {
        id: 16,
        quest: "Bài toán khám phá qui luật dựa trên nhiều dữ liệu cho trước thuộc vào nhóm nào?",
        answer: ["Học tăng cường", "Học có giám sát", "Học không giám sát "],
        correctAns: 2,
        image: null,
    },
    {
        id: 17,
        quest: "Tập dữ liệu của học không giám sát bao gồm tập dữ liệu đầu vào X (tập đặc trưng) và nhãn đầu ra (y)",
        answer: ["True", "False"],
        correctAns: 1,
        image: null,
    },
    {
        id: 18,
        quest: "Học tăng cường là phương pháp học bằng cách thử và sai",
        answer: ["True", "False"],
        correctAns: 0,
        image: null,
    },
    {
        id: 19,
        quest: "Học máy được phân loại thành các nhóm nào",
        answer: [
            "Học có giám sát",
            "Học không giám sát ",
            "Học tăng cường",
            "Bài toán phân loại và hồi qui",
            "Đáp án sẽ là: A,B,C vì làm biếng code chọn nhiều =))",
        ],
        correctAns: 2,
        image: null,
    },
    {
        id: 20,
        quest: "Bài toán khám phá qui luật dựa trên nhiều dữ liệu cho trước thuộc vào nhóm nào?",
        answer: ["Học tăng cường", "Học có giám sát", "Học không giám sát "],
        correctAns: 2,
        image: null,
    },
    {
        id: 21,
        quest: "Tập dữ liệu của học không giám sát bao gồm tập dữ liệu đầu vào X (tập đặc trưng) và nhãn đầu ra (y)",
        answer: ["True", "False"],
        correctAns: 1,
        image: null,
    },
    {
        id: 22,
        quest: "Học tăng cường là phương pháp học bằng cách thử và sai",
        answer: ["True", "False"],
        correctAns: 0,
        image: null,
    },
    {
        id: 23,
        quest: "Phương pháp hồi quy tuyến tính dùng cho trường hợp nào sau đây?",
        answer: [
            "Một ví dụ đầu vào, dự đoán đầu ra là kiểu rời rạc",
            "Một ví dụ đầu vào, dự đoán đầu ra là kiểu số thực",
            "Một ví dụ đầu vào, dự đoán đầu ra thuộc một lớp bất kỳ",
        ],
        correctAns: 1,
        image: null,
    },
    {
        id: 24,
        quest: "Phương pháp hồi quy logistic dùng cho trường hợp nào sau đây?",
        answer: [
            "Một ví dụ đầu vào, dự đoán đầu ra là kiểu rời rạc",
            "Một ví dụ đầu vào, dự đoán đầu ra là kiểu số thực",
            "Một ví dụ đầu vào, dự đoán đầu ra thuộc một lớp bất kỳ",
        ],
        correctAns: 0,
        image: null,
    },
    {
        id: 25,
        quest: "Phương pháp học hồi quy tuyến tính là học vector trọng số để tối đa hóa hàm đánh giá lỗi của hệ thống trong giai đoạn huấn luyện",
        answer: ["True", "False"],
        correctAns: 1,
        image: null,
    },
    {
        id: 26,
        quest: "Để cập nhật vector trọng số trong học hồi quy tuyến tính, chúng ta có thể:",
        answer: ["Cập nhật theo từng ví dụ", "Cập nhật theo đợt (tập các ví dụ)", "Cả 2 phương án trên"],
        correctAns: 2,
        image: null,
    },
    {
        id: 27,
        quest: "Trong học cây quyết định, để đánh giá khả năng của một thuộc tính theo nhãn lớp, chúng ta tính mức độ giảm về độ hỗn tạp Entropy của một tập",
        answer: ["True", "False"],
        correctAns: 0,
        image: null,
    },
    {
        id: 28,
        quest: "Thuộc tính nên được chọn là thuộc tính kiểm tra trong học cây quyết định là:",
        answer: [
            "Thuộc tính có giá trị Information gain cao nhất",
            "Thuộc tính có giá trị Information gain thấp nhất",
            "Thuộc tính có giá trị Information gain bằng 0",
        ],
        correctAns: 0,
        image: null,
    },
    {
        id: 29,
        quest: "Bài toán nào thì có thể sử dụng phương pháp học dựa trên KNN",
        answer: [
            "A. Bài toán phân lớp",
            "B. Bài toán dự đoán/ hồi quy",
            "C. Bài toán nhận dạng ảnh",
            "A và B",
            "A và C",
            "Cả A,B,C",
        ],
        correctAns: 3,
        image: null,
    },
    {
        id: 30,
        quest: "Trong phương pháp KNN, đối với bài toán phân lớp có 2 lớp, k thường được chọn là:",
        answer: ["1", "số lẻ", "số chẵn", "2"],
        correctAns: 1,
        image: null,
    },
    {
        id: 31,
        quest: "KNN hoạt động tốt đối với các bài toán phân loại gồm nhiều lớp vì sao?",
        answer: [
            "Phân loại dựa đoán được thực hiện trên k láng giềng gần nhất",
            "Không cần phải học n bộ phân loại cho n lớp",
            "Số lượng các thuộc tính ( để biểu diễn ví dụ) là không nhiều",
        ],
        correctAns: 1,
        image: null,
    },
    {
        id: 32,
        quest: "Trong KNN, hàm khoảng cách Hamming là một hàm tính khoảng cách hình học.",
        answer: ["True", "False"],
        correctAns: 1,
        image: null,
    },
    {
        id: 33,
        quest: "Lựa chọn câu phát biểu đúng về phương pháp máy vector hỗ trợ SVM",
        answer: [
            "SVM là một phương pháp phân lớp tuyến tình dùng để phân tách 2 lớp của dữ liệu",
            "SVM có thẻ thực hiện phân lớp với các bài toán từ 2 phân lớp trở lên",
            "SVM là một phương pháp dành cho phương pháp học có giám sát",
            "SVM là một phương pháp dành cho học máy không giám sát",
            "Ý 1, 3 là đáp án đúng",
        ],
        correctAns: "",
        image: null,
    },
    {
        id: 34,
        quest: "Tập không gian đầu vào của phương pháp SVM là",
        answer: ["Một tập số thực", "Tập các thuộc tính định danh", "Cả 2 câu trả lời trên"],
        correctAns: 0,
        image: null,
    },
    {
        id: 35,
        quest: "SVM được biết đến là một phương pháp phân lớp tốt nhất đối với loại bài toán nào",
        answer: [
            "Bài toán nhận dạng ảnh",
            "Bài toán phân lớp văn bản",
            "Bài toán phân loại thư rác",
            "Bài toán tổ hợp tối ưu",
        ],
        correctAns: 1,
        image: null,
    },
    {
        id: 36,
        quest: "Trong phương pháp SVM, có thể tồn tại bao nhiêu mặt siêu phẳng phân tách",
        answer: ["1", "3", "10", "Vô số"],
        correctAns: 3,
        image: null,
    },
    {
        id: 37,
        quest: "Trong phương pháp SVM, một mặt siêu phẳng phân tách tối thiểu hóa giới hạn lơi (phân lớp) mắc phải gọi là",
        answer: ["Mặt siêu phẳng có lề cực đại", "Mặt siêu phẳng có lề cực tiểu", "Mặt siêu phẳng có lề bằng 0"],
        correctAns: 0,
        image: null,
    },
    {
        id: 38,
        quest: "Phương pháp K-means là:",
        answer: ["Phương pháp học có giám sát", "Phương pháp học không giám sát", "Phương pháp học tăng cường"],
        correctAns: 1,
        image: null,
    },
    {
        id: 39,
        quest: "Tập đầu vào của một bài toán phân cụm là",
        answer: ["Tập dữ liệu không có nhãn", "Tập dữ liệu có nhãn"],
        correctAns: 0,
        image: null,
    },
    {
        id: 40,
        quest: "Trong giải thuật phân cụm k-Means, tập dữ liệu được phân loại thành bao nhiêu cụm",
        answer: ["2 cụm", "Nhiều hơn 2 cụm", "k cụm"],
        correctAns: 1,
        image: null,
    },
    {
        id: 41,
        quest: "Quá trình phân cụm trong giải thuật k-Means sẽ kết thúc nếu",
        answer: [
            "Không có việc gán lại các ví dụ vào các cụm khác",
            "Không có thay đổi về các điểm trung tập của các cụm",
            "Giảm không đáng kể về tổng lỗi phân cụm",
            "Một trong ba điều kiện trên thỏa mãn",
            "Tất cả các điều kiện trên được thỏa mãn",
        ],
        correctAns: 3,
        image: null,
    },
    {
        id: 42,
        quest: "Giai thuật k-Means có thể đưa ra lời giải chính xác cho bài toán phân 2 cụm trong hình vẽ dưới đây không?",
        answer: ["Có", "Không"],
        correctAns: 1,
        image: "./img/baicuoi.png",
    },
    {
        id: 43,
        quest: "Điều nào đúng khi nói về phân cụm với K-Means?",
        answer: ["1, 2 và 3", "1 và 3", "1 và 2", "2 và 3"],
        correctAns: 0,
        image: null,
    },
    {
        id: 44,
        quest: "Yêu cầu nào dưới đây cần thực hiện dối với phân cụm bằng thuật toán K-Means?",
        answer: ["Tất cả đáp án trên", "Xác định số cụm", "Khởi tạo tâm các cụm", "Xác định độ đo khoảng cách"],
        correctAns: 0,
        image: "./img/bai44.png",
    },
    {
        id: 45,
        quest: "Phân chia 7 quan sát vào 3 cụm sử dụng thuật toán K-Means. Sau vòng lặp đầu tiên, 3 cụm C1, C2, C3 gồm những quan sát sau",
        answer: [
            "C1: (4,4), C2: (2,2), C3: (7,7)",
            "C1: (6,6), C2: (4,4), C3: (9,9)",
            "C1: (2,2), C2: (0,0), C3: (5,5)",
            "Không có đáp án nào đúng",
        ],
        correctAns: 0,
        image: "./img/bai45.png",
    },
    {
        id: 46,
        quest: "Phân chia 7 quan sát vào 3 cụm sử dụng thuật toán K-Means. Sau vòng lặp đầu tiên, 3 cụm C1, C2, C3 gồm những quan sát sau",
        answer: ["10", "5 * sqrt(2)", "13 * qsrt(2)", "8"],
        correctAns: 0,
        image: "./img/bai46.png",
    },
    {
        id: 47,
        quest: "Lời giải tối ưu trong bài toán tìm kiếm thường tối ưu yếu tố nào?",
        answer: ["Tốc độ tìm kiếm và giả thành tìm kiếm", "Đô kho trong tinh toan", "Độ phủ trong quá trình tìm kiếm"],
        correctAns: 0,
        image: null,
    },
    {
        id: 48,
        quest: "Để đánh giá một thuật toán tìm kiếm, có thể dùng những tiêu chí nào?",
        answer: [
            "Không gian tìm kiếm phải đơn giản",
            "Thuật toán phải tìm được lời giải",
            "Tính đầy đủ, tính tối ưu, tính hiệu quả",
            "Tất cả đáp án trên",
        ],
        correctAns: 2,
        image: null,
    },
    {
        id: 49,
        quest: "Các phương pháp tìm kiếm có thể được chia làm mấy loại?",
        answer: ["4", "3", "2"],
        correctAns: 2,
        image: null,
    },
    {
        id: 50,
        quest: "Lời giải của bài toán tìm kiếm là gì?",
        answer: [
            "Là trạng thái đích",
            "Là tất cả các trạng thái mà thuật toán đi qua",
            "Là chuỗi các trạng thái theo thứ tự tìm kiếm từ trạng thái bắt đầu đến trạng thái đích",
            "Không có đáp án đúng",
        ],
        correctAns: 0,
        image: null,
    },
    {
        id: 51,
        quest: "Sự khác nhau cơ bản giữa phương pháp tìm kiếm theo chiều rộng và tìm kiếm theo chiều sâu là gì?",
        answer: [
            "Phương pháp tìm kiếm theo chiều rộng nhanh hơn phương pháp tìm kiếm theo chiều sâu",
            "Phương pháp tìm kiếm theo chiều sâu tìm theo bề ngang của cây tìm kiếm, trong khi phương pháp tìm kiếm theo chiều rộng tìm theo bề dọc của cây tìm kiếm",
            "Phương pháp tìm kiếm theo chiều sâu tìm theo bề ngang của cây tìm kiếm, trong khi phương pháp tìm kiếm theo chiều rộng tìm theo bề dọc của cây tìm kiếm",
            "Phương pháp tìm kiếm theo chiều sâu là phương pháp tìm kiếm mù, trong khi phương pháp tìm kiếm theo chiều rộng là phương pháp tìm kiếm có thông tin",
        ],
        correctAns: 2,
        image: null,
    },
    {
        id: 52,
        quest: "Tác dụng của hàm heuristic là gì?",
        answer: [
            "Đánh giá lời giải của thuật toán",
            "Đánh giá độ phức tạp của một thuật toán",
            "Ước lượng tốc độ tìm kiếm",
            "Ước lượng lời giải tối ưu từ trạng thái hiện tại đến trạng thái đích",
        ],
        correctAns: 3,
        image: null,
    },
    {
        id: 53,
        quest: "Câu nào dưới đây mô tả chính xác nhất về hàm lỗi khi xây dựng một mô hình học máy?",
        answer: [
            "Là sai số dự báo của mô hình học máy",
            "Là độ lệch trung bình giữa kết quả dự báo và giá trị quan sát trên tập dữ liệu huấn luyện",
        ],
        correctAns: 1,
        image: null,
    },
    {
        id: 54,
        quest: "Tại sao mô hình hồi quy logistic sử dụng hàm logit (logistic function)?",
        answer: [
            "Vì hàm logit cho kết quả xấp xỉ tốt hơn hàm tuyến tính cho loại dữ liệu phân lớp",
            "Vì hàm logit cho kết quả xấp xỉ nhanh hơn hàm tuyến tính cho loại dữ liệu phân lớp",
            "Vì hàm logit là đơn giản hơn cho việc tính toán",
            "Tất cả đáp án trên",
        ],
        correctAns: 0,
        image: null,
    },
    {
        id: 55,
        quest: "Ứng dụng học máy nào dưới đây có thể được xây dựng bởi mô hình hồi quy logistic?",
        answer: [
            "Dự báo tỷ số một trận bóng đá",
            "Dự báo khả năng mắc bệnh hay không của bệnh nhân dựa trên các kết quả xét nghiệm",
            "Cảnh báo sóng thần dựa trên các dữ liệu sinh trắc học",
            "Tất cả các đáp án trên",
        ],
        correctAns: 3,
        image: null,
    },
    {
        id: 56,
        quest: "Phát biểu nào dưới đây là đúng về phương pháp K-NN?",
        answer: [
            "K-NN là phương pháp học tăng cường",
            "K-NN dùng để nhận dạng, phân loại mẫu dựa trên đặc điểm của K mẫu giống mẫu đang xét nhất",
        ],
        correctAns: 1,
        image: null,
    },
    {
        id: 57,
        quest: "Khoảng cách sử dụng trong phương pháp K-NN có đặc điểm gì?",
        answer: [
            "Mô tả sự giống nhau giữa hai quan sát trong dữ liệu. Khoảng cách càng lớn, hai quan sát càng giống nhau",
            "Là khoảng cách vật lý giữa hai quan sát trong dữ liệu",
            "Là độ lớn của dữ liệu",
            "Mô tả sự giống nhau giữa hai quan sát trong dữ liệu. Khoảng cách càng nhỏ, hai quan sát càng giống nhau",
        ],
        correctAns: 3,
        image: null,
    },
    {
        id: 58,
        quest: "Với cùng một mẫu, phương pháp K-NN cho ra kết quả giống nhau nếu:",
        answer: [
            "Cùng giá trị K, cùng phương pháp định nghĩa khoảng cách",
            "Cùng giá trị K, cùng dữ liệu quan sát",
            "Cùng dữ liệu quan sát, cùng định nghĩa khoảng cách",
            "Không có đáp án đúng",
        ],
        correctAns: 3,
        image: null,
    },
    {
        id: 59,
        quest: " Điều nào dưới đây là KHÔNG đúng?",
        answer: [
            "Mang neuron giả lập theo cách thức hoạt động của nào người",
            "Chỉ có thể làm việc với một input và một output",
            "Có thể được dùng trong xử lý hình ảnh",
            "Không có đáp án đúng",
        ],
        correctAns: 1,
        image: null,
    },
    {
        id: 60,
        quest: "Hàm lỗi dùng để làm gì?",
        answer: ["Tính sai số cho các lớp tiếp theo", "Tối ưu lỗi", "A và B", "Không có đáp án đúng"],
        correctAns: 2,
        image: null,
    },
    {
        id: 61,
        quest: "Khẳng định nào dưới đây là đúng?",
        answer: [
            "Một neuron có thể có một input và một output",
            "Một neuron có thể có nhiều input và có một output X",
            "Một neuron có thể có một input và có nhiều output",
            "Một neuron có thể có nhiều input và có nhiều output",
            "Tắt các đáp án trên",
        ],
        correctAns: 4,
        image: null,
    },
    {
        id: 62,
        quest: "Quá trình học sâu thực chất là:",
        answer: [
            "Xác định các trọng số sao cho giá trị hàm lỗi là nhỏ nhất ",
            "Xác định số lớp neuron network cần thiết",
            "Xác định mô hình học sâu",
            "Không có đáp án đúng",
        ],
        correctAns: 0,
        image: null,
    },
    {
        id: 63,
        quest: "Điều nào dưới đây là đúng khi phát biểu về học sâu?",
        answer: [
            "Là một nhánh của học máy",
            "Là phương pháp học được xây dựng dựa trên tư duy của não người nhằm phân biệt, nhận dạng những đặc trưng quan trọng mà ít dựa trên sự hướng dẫn của mô hình",
            "Là một phương pháp dùng trong trí tuệ nhân tạo để phận lớp, nhận dạng các sự vật, sự việc được cho dưới dạng dữ liệu nhiều chiều, phức tạp",
            "Cả 3 đáp án trên",
        ],
        correctAns: 3,
        image: null,
    },
    {
        id: 64,
        quest: "Tại sao cần học sâu?",
        answer: [
            "Học máy không thể xử lí các bài toán phức tạp",
            "Học sâu đơn giản hơn học máy",
            "Học sâu cho kết quả nhanh hơn học máy",
            "Cả 3 đáp án trên",
        ],
        correctAns: 0,
        image: null,
    },
    {
        id: 65,
        quest: " Một mạng neuron có ít nhất bao nhiêu lớp?",
        answer: ["2", "3", "5", "10"],
        correctAns: 1,
        image: null,
    },
    {
        id: 66,
        quest: "Sự khác nhau cơ bản giữa phương pháp hồi quy tuyến tính và hồi quy logictic là",
        answer: [
            "Về cơ bản là giống nhau",
            "Hồi quy tuyến tính là phương pháp học có giám sát, hồi quy logictic là phương pháp học không giám sát",
            "Hồi quy tuyến tính thường dùng cho mô hình dự báo, hồi quy logistic thường dùng cho mô hình phân loai",
            "Hồi quy tuyến tính sử dụng ít dữ liệu huấn luyện hơn hồi quy logistic",
        ],
        correctAns: 2,
        image: null,
    },
    {
        id: 67,
        quest: " Ứng dụng học máy nào dưới đây có thể được xây dựng dựa trên thuật toán K-NN?",
        answer: [
            "Dự báo sự phát triển chiều cao của trẻ",
            "Nhận dạng khuôn mặt",
            "2dDự báo độ giãn nở của bê-tông trong các điều kiện nhiệt độ khác nhau",
            "Tất cả các ứng dụng trên",
        ],
        correctAns: 1,
        image: null,
    },
    {
        id: 68,
        quest: "Trong các ứng dụng dưới đây, ứng dụng nào có thể được xây dựng dựa trên phương pháp K-mean?",
        answer: [
            "Phân nhóm những người có kĩ năng lao động và thu nhập tương ứng",
            "Phân loại khách đặt về các thứ hạng và đặc trưng nghề nghiệp",
            "Phân loại giá trị các lô đất dựa trên các đặc trưng vị trí, diện tích, và giá bán",
            "Phân loại các nhóm tộc người dựa trên đặc điểm mã gen",
            "Tất cả các đáp án trên",
        ],
        correctAns: 4,
        image: null,
    },
]

var causo = document.querySelector(".causo")
var btn = document.querySelector("#btn-main")
var quest = document.querySelector(".quest")
var radio = document.querySelector(".radio")
var image = document.querySelector(".image")

var next = document.querySelector("#next")
var prev = document.querySelector("#prev")
var random = document.querySelector("#random")
var checkText = document.querySelector(".check")
var aaaa = document.querySelector(".aaaa")
var socaudung = 0
var currentIndex = 0
var arrSavecurrentIndex = []
btn.addEventListener("click", function () {
    CheckAnswer1()
})

next.addEventListener("click", function () {
    CheckAnswer()
    currentIndex++
    checkText.classList.add("hide")
    if (currentIndex >= questionList.length) currentIndex = 0
    console.log(currentIndex)
    aaaa.innerHTML = "Số lần đúng: " + socaudung

    Runtime()
})

prev.addEventListener("click", function () {
    if (currentIndex > 0) currentIndex--
    else currentIndex = 0
    console.log(currentIndex)
    checkText.classList.add("hide")

    Runtime()
})

random.addEventListener("click", function () {
    var rand = Math.floor(Math.random() * questionList.length)
    currentIndex = rand
    checkText.classList.add("hide")
    Runtime()
})

window.addEventListener("submit", function (e) {
    e.preventDefault()
})

function CheckAnswer1() {
    var checkedInput = document.querySelector("input[name='radio']:checked")

    if (checkedInput) {
        var selectedAnswer = checkedInput.parentNode.querySelector(".answer").textContent
        console.log(checkedInput)
        if (selectedAnswer == questionList[currentIndex].answer[questionList[currentIndex].correctAns]) {
            checkText.classList.remove("hide")
            checkText.innerHTML = "Chính xác"
        } else {
            checkText.classList.remove("hide")
            checkText.innerHTML = "Sai rồi"
        }
    }
}

function CheckAnswer() {
    var checkedInput = document.querySelector("input[name='radio']:checked")

    if (checkedInput) {
        var selectedAnswer = checkedInput.parentNode.querySelector(".answer").textContent
        console.log(checkedInput)
        if (selectedAnswer == questionList[currentIndex].answer[questionList[currentIndex].correctAns]) {
            checkText.classList.remove("hide")
            socaudung++
        } else {
            checkText.classList.remove("hide")
        }
    }
}

function Runtime() {
    causo.innerHTML = "Câu Số " + questionList[currentIndex].id
    quest.innerHTML = questionList[currentIndex].quest
    radio.innerHTML = ""

    for (let i = 0; i < questionList[currentIndex].answer.length; i++) {
        var html = `<label class="container">
                        <span class="answer">${questionList[currentIndex].answer[i]}</span>
                        <input type="radio" name="radio" />
                        <span class="checkmark"></span>
                    </label>`

        radio.innerHTML += html

        if (questionList[currentIndex].image != null) {
            image.classList.remove("hide")

            image.src = questionList[currentIndex].image
        } else {
            image.classList.add("hide")
        }
    }
}

Runtime()

var btnChonCau = document.querySelector("#btn-choncau")
var chonCau = document.querySelector("#choncau")

btnChonCau.addEventListener("click", function () {
    if (chonCau.value <= questionList.length) {
        currentIndex = chonCau.value - 1
        Runtime()
    } else alert("Chúng tôi chỉ có " + questionList.length + " câu hỏi, vui lòng nhập lại!")
})
