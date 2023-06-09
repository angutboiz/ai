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
        id: 14,
        quest: "Tập dữ liệu của học không giám sát bao gồm tập dữ liệu đầu vào X (tập đặc trưng) và nhãn đầu ra (y)",
        answer: ["True", "False"],
        correctAns: 1,
        image: null,
    },
    {
        id: 15,
        quest: "Học tăng cường là phương pháp học bằng cách thử và sai",
        answer: ["True", "False"],
        correctAns: 0,
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
        id: 14,
        quest: "Tập dữ liệu của học không giám sát bao gồm tập dữ liệu đầu vào X (tập đặc trưng) và nhãn đầu ra (y)",
        answer: ["True", "False"],
        correctAns: 1,
        image: null,
    },
    {
        id: 15,
        quest: "Học tăng cường là phương pháp học bằng cách thử và sai",
        answer: ["True", "False"],
        correctAns: 0,
        image: null,
    },
    {
        id: 16,
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
        id: 17,
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
        id: 18,
        quest: "Phương pháp học hồi quy tuyến tính là học vector trọng số để tối đa hóa hàm đánh giá lỗi của hệ thống trong giai đoạn huấn luyện",
        answer: ["True", "False"],
        correctAns: 1,
        image: null,
    },
    {
        id: 19,
        quest: "Để cập nhật vector trọng số trong học hồi quy tuyến tính, chúng ta có thể:",
        answer: ["Cập nhật theo từng ví dụ", "Cập nhật theo đợt (tập các ví dụ)", "Cả 2 phương án trên"],
        correctAns: 2,
        image: null,
    },
    {
        id: 20,
        quest: "Trong học cây quyết định, để đánh giá khả năng của một thuộc tính theo nhãn lớp, chúng ta tính mức độ giảm về độ hỗn tạp Entropy của một tập",
        answer: ["True", "False"],
        correctAns: 0,
        image: null,
    },
    {
        id: 21,
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
        id: 22,
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
        id: 23,
        quest: "Trong phương pháp KNN, đối với bài toán phân lớp có 2 lớp, k thường được chọn là:",
        answer: ["1", "số lẻ", "số chẵn", "2"],
        correctAns: 1,
        image: null,
    },
    {
        id: 24,
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
        id: 25,
        quest: "Trong KNN, hàm khoảng cách Hamming là một hàm tính khoảng cách hình học.",
        answer: ["True", "False"],
        correctAns: 1,
        image: null,
    },
    {
        id: 26,
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
        id: 27,
        quest: "Tập không gian đầu vào của phương pháp SVM là",
        answer: ["Một tập số thực", "Tập các thuộc tính định danh", "Cả 2 câu trả lời trên"],
        correctAns: 0,
        image: null,
    },
    {
        id: 28,
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
        id: 29,
        quest: "Trong phương pháp SVM, có thể tồn tại bao nhiêu mặt siêu phẳng phân tách",
        answer: ["1", "3", "10", "Vô số"],
        correctAns: 3,
        image: null,
    },
    {
        id: 30,
        quest: "Trong phương pháp SVM, một mặt siêu phẳng phân tách tối thiểu hóa giới hạn lơi (phân lớp) mắc phải gọi là",
        answer: ["Mặt siêu phẳng có lề cực đại", "Mặt siêu phẳng có lề cực tiểu", "Mặt siêu phẳng có lề bằng 0"],
        correctAns: 0,
        image: null,
    },
    {
        id: 31,
        quest: "Phương pháp K-means là:",
        answer: ["Phương pháp học có giám sát", "Phương pháp học không giám sát", "Phương pháp học tăng cường"],
        correctAns: 1,
        image: null,
    },
    {
        id: 32,
        quest: "Tập đầu vào của một bài toán phân cụm là",
        answer: ["Tập dữ liệu không có nhãn", "Tập dữ liệu có nhãn"],
        correctAns: 0,
        image: null,
    },
    {
        id: 33,
        quest: "Trong giải thuật phân cụm k-Means, tập dữ liệu được phân loại thành bao nhiêu cụm",
        answer: ["2 cụm", "Nhiều hơn 2 cụm", "k cụm"],
        correctAns: 1,
        image: null,
    },
    {
        id: 34,
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
        id: 35,
        quest: "Giai thuật k-Means có thể đưa ra lời giải chính xác cho bài toán phân 2 cụm trong hình vẽ dưới đây không?",
        answer: ["Có", "Không"],
        correctAns: 1,
        image: "./img/baicuoi.png",
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
var currentIndex = 0

btn.addEventListener("click", function () {
    CheckAnswer()
})

next.addEventListener("click", function () {
    currentIndex++
    checkText.classList.add("hide")
    if (currentIndex >= questionList.length) currentIndex = 0
    console.log(currentIndex)

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
    Runtime()
})

window.addEventListener("submit", function (e) {
    e.preventDefault()
})

function CheckAnswer() {
    var checkedInput = document.querySelector("input[name='radio']:checked")
    if (checkedInput) {
        var selectedAnswer = checkedInput.parentNode.querySelector(".answer").textContent
        console.log(questionList[currentIndex].answer[questionList[currentIndex].correctAns])
        if (selectedAnswer == questionList[currentIndex].answer[questionList[currentIndex].correctAns]) {
            checkText.classList.remove("hide")
            checkText.innerHTML = "Chính xác"
        } else {
            checkText.classList.remove("hide")
            checkText.innerHTML = "Sai rồi"
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
