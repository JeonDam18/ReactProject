-- --------------------------------------------------------
-- 호스트:                          127.0.0.1
-- 서버 버전:                        8.0.39 - MySQL Community Server - GPL
-- 서버 OS:                        Win64
-- HeidiSQL 버전:                  12.8.0.6908
-- --------------------------------------------------------

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET NAMES utf8 */;
/*!50503 SET NAMES utf8mb4 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;


-- sample 데이터베이스 구조 내보내기
CREATE DATABASE IF NOT EXISTS `sample` /*!40100 DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci */ /*!80016 DEFAULT ENCRYPTION='N' */;
USE `sample`;

-- 테이블 sample.react_board 구조 내보내기
CREATE TABLE IF NOT EXISTS `react_board` (
  `BOARD_NO` int NOT NULL AUTO_INCREMENT,
  `USER_ID` varchar(50) NOT NULL,
  `BOARD_CONTENTS` varchar(500) NOT NULL,
  `CDATETIME` datetime DEFAULT CURRENT_TIMESTAMP,
  `UDATETIME` datetime DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`BOARD_NO`)
) ENGINE=InnoDB AUTO_INCREMENT=29 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- 테이블 데이터 sample.react_board:~21 rows (대략적) 내보내기
INSERT INTO `react_board` (`BOARD_NO`, `USER_ID`, `BOARD_CONTENTS`, `CDATETIME`, `UDATETIME`) VALUES
	(1, 'test1', '이것은 첫 번째 테스트 글입니다. 많은 사람들이 이 글을 좋아할 것입니다.', '2024-10-23 11:24:40', '2024-10-23 11:24:40'),
	(2, 'test2', '오늘 날씨가 정말 좋네요. 밖에 나가서 운동해야겠습니다.', '2024-10-23 11:24:40', '2024-10-23 11:24:40'),
	(3, 'test3', '주말에는 가족과 함께 시간을 보내고 싶습니다. 좋은 시간이 될 것 같아요.', '2024-10-23 11:24:40', '2024-10-23 11:24:40'),
	(4, 'test4', '새로운 프로젝트를 시작했습니다. 열심히 해보겠습니다!', '2024-10-23 11:24:40', '2024-10-23 11:24:40'),
	(5, 'test5', '여행을 떠나고 싶어요. 멋진 장소를 찾아봐야겠네요.', '2024-10-23 11:24:40', '2024-10-23 11:24:40'),
	(6, 'test6', '친구와 카페에서 시간을 보냈습니다. 정말 즐거운 하루였어요.', '2024-10-23 11:24:40', '2024-10-23 11:24:40'),
	(7, 'test7', '독서를 하면서 새로운 지식을 얻는 것이 좋습니다. 추천 책이 있나요?', '2024-10-23 11:24:40', '2024-10-23 11:24:40'),
	(8, 'test1', '요즘 드라마에 푹 빠져있어요. 다음 회가 기대됩니다.', '2024-10-23 11:24:40', '2024-10-23 11:24:40'),
	(9, 'test2', '스포츠를 즐기는 것이 건강에 좋다는 것을 느끼고 있습니다.', '2024-10-23 11:24:40', '2024-10-23 11:24:40'),
	(10, 'test3', '음악을 들으며 하루를 마무리하는 것이 좋습니다. 추천곡이 있나요?', '2024-10-23 11:24:40', '2024-10-23 11:24:40'),
	(11, 'test4', '최근에 배운 요리가 너무 맛있어서 자랑하고 싶어요!', '2024-10-23 11:24:40', '2024-10-23 11:24:40'),
	(12, 'test5', '매일매일 새로운 것을 배우는 것이 인생의 큰 기쁨입니다.', '2024-10-23 11:24:40', '2024-10-23 11:24:40'),
	(13, 'test6', '오늘은 친구와 함께 산책을 하며 좋은 시간을 보냈습니다.', '2024-10-23 11:24:40', '2024-10-23 11:24:40'),
	(14, 'test7', '새로운 카페를 발견했어요. 다음에 같이 가봐요!', '2024-10-23 11:24:40', '2024-10-23 11:24:40'),
	(15, 'test1', '영화를 보며 많은 감정을 느낍니다. 추천해줄 영화가 있나요?', '2024-10-23 11:24:40', '2024-10-23 11:24:40'),
	(16, 'test2', '스케치북을 들고 공원에서 그림을 그리는 것이 즐겁습니다.', '2024-10-23 11:24:40', '2024-10-23 11:24:40'),
	(17, 'test3', '매일 아침 운동하는 습관을 들이고 있습니다. 건강이 중요하죠.', '2024-10-23 11:24:40', '2024-10-23 11:24:40'),
	(18, 'test4', '좋은 음악을 들으며 하루를 시작하는 것이 가장 행복합니다.', '2024-10-23 11:24:40', '2024-10-23 11:24:40'),
	(19, 'test5', '요즘 독서하는 재미를 느끼고 있습니다. 좋은 책을 추천해주세요.', '2024-10-23 11:24:40', '2024-10-23 11:24:40'),
	(20, 'test6', '사진을 찍는 것이 취미입니다. 여러분의 사진도 보고 싶어요!', '2024-10-23 11:24:40', '2024-10-23 11:24:40'),
	(21, 'test7', '가끔은 혼자 있는 시간이 필요합니다. 나를 돌아보는 시간이죠.', '2024-10-23 11:24:40', '2024-10-23 11:24:40');

-- 테이블 sample.react_board_attach 구조 내보내기
CREATE TABLE IF NOT EXISTS `react_board_attach` (
  `ATTACH_NO` int NOT NULL AUTO_INCREMENT,
  `BOARD_NO` int NOT NULL,
  `ATTACH_PATH1` varchar(200) DEFAULT NULL,
  PRIMARY KEY (`ATTACH_NO`)
) ENGINE=InnoDB AUTO_INCREMENT=94 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- 테이블 데이터 sample.react_board_attach:~47 rows (대략적) 내보내기
INSERT INTO `react_board_attach` (`ATTACH_NO`, `BOARD_NO`, `ATTACH_PATH1`) VALUES
	(9, 26, 'http://localhost:3100/img/1730080957231.jpg'),
	(10, 26, 'http://localhost:3100/img/1730080957232.jpg'),
	(11, 26, 'http://localhost:3100/img/1730080957234.png'),
	(44, 1, 'http://localhost:3100/img/q1.jpg'),
	(45, 1, 'http://localhost:3100/img/q2.jpg'),
	(46, 1, 'http://localhost:3100/img/q3.jpg'),
	(47, 2, 'http://localhost:3100/img/q4.jpg'),
	(48, 2, 'http://localhost:3100/img/q5.jpg'),
	(49, 3, 'http://localhost:3100/img/q6.jpg'),
	(50, 3, 'http://localhost:3100/img/q7.jpg'),
	(51, 4, 'http://localhost:3100/img/q8.jpg'),
	(52, 4, 'http://localhost:3100/img/q9.jpg'),
	(53, 5, 'http://localhost:3100/img/q10.jpg'),
	(54, 5, 'http://localhost:3100/img/q11.jpg'),
	(55, 6, 'http://localhost:3100/img/q12.jpg'),
	(56, 6, 'http://localhost:3100/img/q13.jpg'),
	(57, 7, 'http://localhost:3100/img/q14.jpg'),
	(58, 7, 'http://localhost:3100/img/q15.jpg'),
	(59, 8, 'http://localhost:3100/img/q16.jpg'),
	(60, 8, 'http://localhost:3100/img/q17.jpg'),
	(61, 9, 'http://localhost:3100/img/q18.jpg'),
	(62, 9, 'http://localhost:3100/img/q19.jpg'),
	(63, 10, 'http://localhost:3100/img/q20.jpg'),
	(64, 10, 'http://localhost:3100/img/q21.jpg'),
	(65, 11, 'http://localhost:3100/img/q22.jpg'),
	(66, 11, 'http://localhost:3100/img/q23.jpg'),
	(67, 12, 'http://localhost:3100/img/q24.jpg'),
	(68, 12, 'http://localhost:3100/img/q25.jpg'),
	(69, 13, 'http://localhost:3100/img/q26.jpg'),
	(70, 13, 'http://localhost:3100/img/q27.jpg'),
	(71, 14, 'http://localhost:3100/img/q28.jpg'),
	(72, 14, 'http://localhost:3100/img/q29.jpg'),
	(73, 15, 'http://localhost:3100/img/q30.jpg'),
	(74, 15, 'http://localhost:3100/img/q31.jpg'),
	(75, 16, 'http://localhost:3100/img/q32.jpg'),
	(76, 16, 'http://localhost:3100/img/q33.jpg'),
	(77, 17, 'http://localhost:3100/img/q34.jpg'),
	(78, 17, 'http://localhost:3100/img/q35.jpg'),
	(79, 18, 'http://localhost:3100/img/q36.jpg'),
	(80, 18, 'http://localhost:3100/img/q37.jpg'),
	(81, 19, 'http://localhost:3100/img/q38.jpg'),
	(82, 19, 'http://localhost:3100/img/q39.jpg'),
	(83, 20, 'http://localhost:3100/img/q40.jpg'),
	(84, 20, 'http://localhost:3100/img/q41.jpg'),
	(85, 21, 'http://localhost:3100/img/q42.jpg'),
	(86, 21, 'http://localhost:3100/img/q43.jpg'),
	(87, 21, 'http://localhost:3100/img/q44.jpg'),
	(88, 27, 'http://localhost:3100/img/1730183698577.jpg'),
	(89, 27, 'http://localhost:3100/img/1730183698596.jpg'),
	(90, 27, 'http://localhost:3100/img/1730183698627.jpg'),
	(91, 28, 'http://localhost:3100/img/1730183765052.jpg'),
	(92, 28, 'http://localhost:3100/img/1730183765053.jpg'),
	(93, 28, 'http://localhost:3100/img/1730183765055.jpg');

-- 테이블 sample.react_board_like 구조 내보내기
CREATE TABLE IF NOT EXISTS `react_board_like` (
  `LIKE_NO` int NOT NULL AUTO_INCREMENT,
  `BOARD_NO` int NOT NULL,
  `USER_ID` varchar(50) NOT NULL,
  PRIMARY KEY (`LIKE_NO`)
) ENGINE=InnoDB AUTO_INCREMENT=50 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- 테이블 데이터 sample.react_board_like:~41 rows (대략적) 내보내기
INSERT INTO `react_board_like` (`LIKE_NO`, `BOARD_NO`, `USER_ID`) VALUES
	(3, 1, 'test3'),
	(4, 1, 'test4'),
	(6, 2, 'test2'),
	(7, 2, 'test5'),
	(9, 3, 'test3'),
	(10, 3, 'test6'),
	(11, 3, 'test7'),
	(12, 4, 'test2'),
	(13, 4, 'test4'),
	(14, 4, 'test5'),
	(15, 5, 'test1'),
	(16, 5, 'test2'),
	(17, 5, 'test6'),
	(18, 6, 'test3'),
	(19, 6, 'test5'),
	(20, 7, 'test4'),
	(21, 7, 'test5'),
	(22, 7, 'test6'),
	(23, 8, 'test1'),
	(24, 8, 'test3'),
	(25, 9, 'test2'),
	(26, 10, 'test3'),
	(27, 11, 'test4'),
	(28, 12, 'test5'),
	(29, 13, 'test6'),
	(30, 14, 'test7'),
	(31, 15, 'test1'),
	(32, 16, 'test2'),
	(33, 17, 'test3'),
	(34, 18, 'test4'),
	(35, 19, 'test5'),
	(36, 20, 'test6'),
	(37, 21, 'test7'),
	(42, 23, 'test1'),
	(43, 21, 'test1'),
	(45, 1, 'test2'),
	(46, 26, 'test2'),
	(47, 26, 'test1'),
	(48, 2, 'test1'),
	(49, 1, 'test1');

-- 테이블 sample.react_comment 구조 내보내기
CREATE TABLE IF NOT EXISTS `react_comment` (
  `COMMENT_NO` int NOT NULL AUTO_INCREMENT,
  `BOARD_NO` int NOT NULL,
  `USER_ID` varchar(50) NOT NULL,
  `COMMENT_CONTENTS` varchar(200) NOT NULL,
  `CDATETIME` datetime DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`COMMENT_NO`)
) ENGINE=InnoDB AUTO_INCREMENT=78 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- 테이블 데이터 sample.react_comment:~66 rows (대략적) 내보내기
INSERT INTO `react_comment` (`COMMENT_NO`, `BOARD_NO`, `USER_ID`, `COMMENT_CONTENTS`, `CDATETIME`) VALUES
	(4, 1, 'test1', '이 게시물 정말 좋아요!', '2024-10-24 09:41:56'),
	(5, 1, 'test3', '유용한 정보네요, 감사합니다!', '2024-10-24 09:41:56'),
	(6, 1, 'test5', '더 많은 정보가 필요해요!', '2024-10-24 09:41:56'),
	(7, 2, 'test2', '와, 사진이 너무 예쁘다!', '2024-10-24 09:41:56'),
	(8, 2, 'test4', '어디서 촬영했나요?', '2024-10-24 09:41:56'),
	(9, 2, 'test6', '진짜 멋진 장소에요!', '2024-10-24 09:41:56'),
	(10, 3, 'test1', '이런 주제로 더 이야기해 주세요!', '2024-10-24 09:41:56'),
	(11, 3, 'test3', '좋은 글 감사합니다!', '2024-10-24 09:41:56'),
	(12, 3, 'test7', '정말 흥미롭네요!', '2024-10-24 09:41:56'),
	(13, 4, 'test2', '너무 공감이 가는 내용이에요!', '2024-10-24 09:41:56'),
	(14, 4, 'test5', '정말 잘 쓴 글이에요.', '2024-10-24 09:41:56'),
	(15, 4, 'test6', '읽어볼 만한 가치가 있어요!', '2024-10-24 09:41:56'),
	(16, 5, 'test3', '추천해 주신 내용이 유익하네요.', '2024-10-24 09:41:56'),
	(17, 5, 'test4', '이런 주제는 항상 흥미로워요!', '2024-10-24 09:41:56'),
	(18, 5, 'test1', '제 친구에게도 공유할게요!', '2024-10-24 09:41:56'),
	(19, 6, 'test2', '영상이 정말 멋지네요!', '2024-10-24 09:41:56'),
	(20, 6, 'test3', '제 스타일이에요, 좋아요!', '2024-10-24 09:41:56'),
	(21, 6, 'test4', '이런 콘텐츠 더 올려주세요!', '2024-10-24 09:41:56'),
	(22, 7, 'test1', '정말 흥미로운 게시물이에요!', '2024-10-24 09:41:56'),
	(23, 7, 'test5', '좋은 정보를 공유해 주셔서 감사합니다.', '2024-10-24 09:41:56'),
	(24, 7, 'test7', '이런 주제에 대해 더 알고 싶어요.', '2024-10-24 09:41:56'),
	(25, 8, 'test2', '게시물이 너무 재밌어요!', '2024-10-24 09:41:56'),
	(26, 8, 'test4', '좋은 하루 보내세요!', '2024-10-24 09:41:56'),
	(27, 8, 'test6', '댓글로 많은 사람들과 소통해요!', '2024-10-24 09:41:56'),
	(28, 9, 'test1', '정말 도움이 많이 되었습니다!', '2024-10-24 09:41:56'),
	(29, 9, 'test3', '이런 내용 더 많이 주세요!', '2024-10-24 09:41:56'),
	(30, 9, 'test5', '정말 유익한 정보네요!', '2024-10-24 09:41:56'),
	(31, 10, 'test2', '정말 흥미로운 주제네요!', '2024-10-24 09:41:56'),
	(32, 10, 'test4', '이런 주제는 항상 환영이에요!', '2024-10-24 09:41:56'),
	(33, 10, 'test7', '게시물 감사합니다!', '2024-10-24 09:41:56'),
	(34, 11, 'test1', '이런 글이 정말 도움이 많이 돼요.', '2024-10-24 09:41:56'),
	(35, 11, 'test3', '정말 잘 쓴 글이에요.', '2024-10-24 09:41:56'),
	(36, 11, 'test5', '재미있는 내용이네요!', '2024-10-24 09:41:56'),
	(37, 12, 'test2', '정말 흥미롭네요!', '2024-10-24 09:41:56'),
	(38, 12, 'test6', '좋은 정보 감사합니다!', '2024-10-24 09:41:56'),
	(39, 12, 'test7', '이런 주제로 더 이야기해 주세요!', '2024-10-24 09:41:56'),
	(40, 13, 'test1', '와, 사진이 너무 예쁘다!', '2024-10-24 09:41:56'),
	(41, 13, 'test4', '정말 멋진 게시물이에요!', '2024-10-24 09:41:56'),
	(42, 13, 'test5', '여기서 많은 것을 배웠어요.', '2024-10-24 09:41:56'),
	(43, 14, 'test2', '이런 주제에 대해 더 알고 싶어요!', '2024-10-24 09:41:56'),
	(44, 14, 'test3', '정말 잘 쓴 글이에요.', '2024-10-24 09:41:56'),
	(45, 14, 'test6', '아주 좋은 정보네요!', '2024-10-24 09:41:56'),
	(46, 15, 'test1', '댓글로 소통하고 싶어요!', '2024-10-24 09:41:56'),
	(47, 15, 'test4', '이런 글이 더 많이 필요해요!', '2024-10-24 09:41:56'),
	(48, 15, 'test5', '정말 멋진 글이에요!', '2024-10-24 09:41:56'),
	(49, 16, 'test2', '정말 유익한 정보네요!', '2024-10-24 09:41:56'),
	(50, 16, 'test3', '이런 글은 자주 올려주세요!', '2024-10-24 09:41:56'),
	(51, 16, 'test7', '게시물 감사합니다!', '2024-10-24 09:41:56'),
	(52, 17, 'test1', '정말 흥미로운 게시물이네요.', '2024-10-24 09:41:56'),
	(53, 17, 'test5', '이런 글이 정말 도움이 많이 돼요!', '2024-10-24 09:41:56'),
	(54, 17, 'test6', '정말 좋은 정보네요!', '2024-10-24 09:41:56'),
	(55, 18, 'test2', '정말 재미있었어요!', '2024-10-24 09:41:56'),
	(56, 18, 'test3', '또 다른 좋은 정보 기대할게요!', '2024-10-24 09:41:56'),
	(57, 18, 'test4', '이런 내용은 항상 환영이에요!', '2024-10-24 09:41:56'),
	(58, 19, 'test1', '이런 주제로 더 이야기해 주세요!', '2024-10-24 09:41:56'),
	(59, 19, 'test2', '정말 흥미로운 게시물이에요!', '2024-10-24 09:41:56'),
	(60, 19, 'test5', '정말 좋은 게시물입니다!', '2024-10-24 09:41:56'),
	(61, 20, 'test3', '이런 주제는 항상 흥미로워요!', '2024-10-24 09:41:56'),
	(62, 20, 'test4', '재미있는 댓글들 많이 달아주세요!', '2024-10-24 09:41:56'),
	(63, 20, 'test6', '좋은 하루 되세요!', '2024-10-24 09:41:56'),
	(64, 21, 'test1', '정말 유익한 정보네요!', '2024-10-24 09:41:56'),
	(65, 21, 'test2', '게시물 감사합니다!', '2024-10-24 09:41:56'),
	(66, 21, 'test5', '좋은 글 감사합니다!', '2024-10-24 09:41:56'),
	(70, 23, 'test1', 'xxx', '2024-10-28 10:50:49'),
	(76, 7, 'test1', '저도 캠핑가고싶어요', '2024-10-29 15:39:01'),
	(77, 14, 'test1', '지진!', '2024-10-29 15:39:35');

-- 테이블 sample.react_comment_like 구조 내보내기
CREATE TABLE IF NOT EXISTS `react_comment_like` (
  `LIKE_NO` int NOT NULL AUTO_INCREMENT,
  `COMMENT_NO` int NOT NULL,
  `USER_ID` varchar(50) NOT NULL,
  PRIMARY KEY (`LIKE_NO`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- 테이블 데이터 sample.react_comment_like:~0 rows (대략적) 내보내기

-- 테이블 sample.react_follow 구조 내보내기
CREATE TABLE IF NOT EXISTS `react_follow` (
  `FOLLOW_NO` int NOT NULL AUTO_INCREMENT,
  `FOLLOW_ID` varchar(50) DEFAULT NULL,
  `FOLLOWER_ID` varchar(50) DEFAULT NULL,
  PRIMARY KEY (`FOLLOW_NO`)
) ENGINE=InnoDB AUTO_INCREMENT=48 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- 테이블 데이터 sample.react_follow:~41 rows (대략적) 내보내기
INSERT INTO `react_follow` (`FOLLOW_NO`, `FOLLOW_ID`, `FOLLOWER_ID`) VALUES
	(5, 'test1', 'test3'),
	(6, 'test1', 'test4'),
	(7, 'test1', 'test5'),
	(8, 'test1', 'test6'),
	(9, 'test1', 'test7'),
	(10, 'test2', 'test1'),
	(11, 'test2', 'test3'),
	(12, 'test2', 'test4'),
	(13, 'test2', 'test5'),
	(14, 'test2', 'test6'),
	(15, 'test2', 'test7'),
	(16, 'test3', 'test1'),
	(17, 'test3', 'test2'),
	(18, 'test3', 'test4'),
	(19, 'test3', 'test5'),
	(20, 'test3', 'test6'),
	(21, 'test3', 'test7'),
	(22, 'test4', 'test1'),
	(23, 'test4', 'test2'),
	(24, 'test4', 'test3'),
	(25, 'test4', 'test5'),
	(26, 'test4', 'test6'),
	(27, 'test4', 'test7'),
	(28, 'test5', 'test1'),
	(29, 'test5', 'test2'),
	(30, 'test5', 'test3'),
	(31, 'test5', 'test4'),
	(32, 'test5', 'test6'),
	(33, 'test5', 'test7'),
	(34, 'test6', 'test1'),
	(35, 'test6', 'test2'),
	(36, 'test6', 'test3'),
	(37, 'test6', 'test4'),
	(38, 'test6', 'test5'),
	(39, 'test6', 'test7'),
	(40, 'test7', 'test1'),
	(41, 'test7', 'test2'),
	(42, 'test7', 'test3'),
	(43, 'test7', 'test4'),
	(44, 'test7', 'test5'),
	(45, 'test7', 'test6');

-- 테이블 sample.react_user 구조 내보내기
CREATE TABLE IF NOT EXISTS `react_user` (
  `USER_NO` int NOT NULL AUTO_INCREMENT,
  `USER_ID` varchar(50) NOT NULL,
  `PASSWORD` varchar(1024) NOT NULL,
  `NAME` varchar(50) NOT NULL,
  `NICKNAME` varchar(50) DEFAULT NULL,
  `PHONE` varchar(50) DEFAULT NULL,
  `EMAIL` varchar(50) DEFAULT NULL,
  `PROFILE_ATTACH_PATH` varchar(200) DEFAULT NULL,
  `CDATETIME` datetime DEFAULT CURRENT_TIMESTAMP,
  `UDATETIME` datetime DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`USER_NO`)
) ENGINE=InnoDB AUTO_INCREMENT=13 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- 테이블 데이터 sample.react_user:~8 rows (대략적) 내보내기
INSERT INTO `react_user` (`USER_NO`, `USER_ID`, `PASSWORD`, `NAME`, `NICKNAME`, `PHONE`, `EMAIL`, `PROFILE_ATTACH_PATH`, `CDATETIME`, `UDATETIME`) VALUES
	(5, 'test1', '1234', '홍길동', '내가홍길동', '01012341234', 'qweqwe@naver.com', NULL, '2024-10-23 10:34:53', '2024-10-23 10:34:53'),
	(6, 'test2', '1234', '김철수', '철수세미', '01034563456', 'asd@google.com', NULL, '2024-10-23 10:54:39', '2024-10-23 10:54:39'),
	(7, 'test3', '1234', '김영희', '철수따까리', '01034561234', 'zxc@google.com', NULL, '2024-10-23 10:55:07', '2024-10-23 10:55:07'),
	(8, 'test4', '1234', '도경수', 'exo', '01078907890', 'exoooo@google.com', NULL, '2024-10-23 10:55:51', '2024-10-23 10:55:51'),
	(9, 'test5', '1234', '방시혁', 'btsmine', '01011223344', 'newjeans@google.com', NULL, '2024-10-23 10:56:27', '2024-10-23 10:56:27'),
	(10, 'test6', '1234', '박진영', 'jypboss', '01018572365', 'god@google.com', NULL, '2024-10-23 10:57:01', '2024-10-23 10:57:01'),
	(11, 'test7', '1234', '이수만', 'i-like-sm', '01055545555', 'hentai@google.com', NULL, '2024-10-23 10:57:40', '2024-10-23 10:57:40');

/*!40103 SET TIME_ZONE=IFNULL(@OLD_TIME_ZONE, 'system') */;
/*!40101 SET SQL_MODE=IFNULL(@OLD_SQL_MODE, '') */;
/*!40014 SET FOREIGN_KEY_CHECKS=IFNULL(@OLD_FOREIGN_KEY_CHECKS, 1) */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40111 SET SQL_NOTES=IFNULL(@OLD_SQL_NOTES, 1) */;
