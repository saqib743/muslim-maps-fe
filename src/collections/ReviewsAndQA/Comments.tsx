import { CommentsProps } from "@/types";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { Avatar, Box, Pagination, Rating, Typography } from "@mui/material";
import Image from "next/image";
import profilePicture_1 from "../../resources/Reviews/1/profilePicture.svg";
import picture_2_1 from "../../resources/Reviews/2/picture_1.svg";
import picture_2_2 from "../../resources/Reviews/2/picture_2.svg";
import picture_2_3 from "../../resources/Reviews/2/picture_3.svg";
import picture_2_4 from "../../resources/Reviews/2/picture_4.svg";
import picture_2_5 from "../../resources/Reviews/2/picture_5.svg";
import profilePicture_2 from "../../resources/Reviews/2/profilePicture.svg";
import like from "../../resources/like.svg";
import translate from "../../resources/translate.svg";
import Button from "@/components/Button/Button";
import favIcon from "../../resources/favIcon.svg";
export default function Comments() {
  return (
    <Box display="flex" flexDirection="column" width="100%" alignItems="center">
      {comments.map((comment, key) => (
        <Box marginTop="20px" key={key}>
          {renderComment(comment)}
        </Box>
      ))}
      <Box display="flex" alignItems="center" marginTop="15px">
        <Typography
          fontFamily="Gilroy-semiBold"
          fontSize="16px"
          fontWeight="600"
          lineHeight="26px"
          letterSpacing="0.01em"
          textAlign="left"
          color="#242429"
          marginRight="15px"
        >
          Prev
        </Typography>
        <Pagination
          variant="outlined"
          color="secondary"
          count={5}
          style={{ marginRight: "15px" }}
        />{" "}
        <Typography
          fontFamily="Gilroy-semiBold"
          fontSize="16px"
          fontWeight="600"
          lineHeight="26px"
          letterSpacing="0.01em"
          textAlign="left"
          color="#242429"
        >
          Next
        </Typography>
      </Box>
    </Box>
  );
}

const renderComment = (comment: CommentsProps) => {
  return (
    <Box
      display="flex"
      flexDirection="column"
      border="1px solid #F0F0F0"
      padding="15px"
      borderRadius="10px"
    >
      <Box display="flex" alignItems="center" justifyContent="space-between">
        <Box display="flex">
          <Image src={comment?.profilePicture} alt={comment.name} />
          <Box display="flex" flexDirection="column" marginLeft="20px">
            <Typography
              fontFamily="Gilroy-semiBold"
              fontSize="16px"
              fontWeight="600"
              lineHeight="26px"
              letterSpacing="0.01em"
              textAlign="left"
              color="#242429"
            >
              {comment.name}
            </Typography>
            <Typography
              fontFamily="Gilroy"
              fontSize="14px"
              fontWeight="400"
              lineHeight="24px"
              letterSpacing="0.01em"
              textAlign="left"
              color="#424244"
            >
              {comment.location}
            </Typography>
            <Rating value={comment.rating} />
          </Box>
        </Box>
        <MoreVertIcon />
      </Box>
      <Typography
        fontFamily="Gilroy-semiBold"
        fontSize="20px"
        fontWeight="600"
        lineHeight="30px"
        letterSpacing="0.01em"
        textAlign={comment.locale === "en" ? "left" : "right"}
        color="#242429"
        marginTop="30px"
      >
        {comment.title}
      </Typography>
      <Typography
        fontFamily="Gilroy"
        fontSize="16px"
        fontWeight="400"
        lineHeight="26px"
        letterSpacing="0.01em"
        textAlign={comment.locale === "en" ? "left" : "right"}
        color="#242429"
        marginTop="15px"
      >
        {comment.description}
      </Typography>
      {comment.description.length > 250 && (
        <Typography
          fontFamily="Gilroy-semiBold"
          fontSize="16px"
          fontWeight="600"
          lineHeight="30px"
          letterSpacing="0.01em"
          textAlign={comment.locale === "en" ? "left" : "right"}
          color="#242429"
          marginTop="10px"
        >
          Read More
        </Typography>
      )}
      <Box display="flex" marginTop="15px">
        {comment.attachments.map((attachment, key) => (
          <Image
            key={key}
            src={attachment.logo}
            alt={"attachment"}
            style={{ marginRight: "8px" }}
          />
        ))}
      </Box>
      <Box
        display="flex"
        alignItems="center"
        justifyContent="space-between"
        marginTop="15px"
      >
        <Box display="flex" alignItems="center">
          <Typography
            fontFamily="Gilroy-medium"
            fontSize="14px"
            fontWeight="500"
            lineHeight="26px"
            letterSpacing="0.01em"
            textAlign="left"
            color="#242429"
            marginRight="25px"
          >
            {"Published " + comment.publishDate}
          </Typography>
          <Image src={like} alt="like" style={{ marginRight: "10px" }} />
          <Typography
            fontFamily="Gilroy"
            fontSize="12px"
            fontWeight="400"
            lineHeight="17px"
            letterSpacing="0.01em"
            textAlign="left"
            color="#242429"
            marginRight="25px"
          >
            {comment.likes}
          </Typography>
          <Image
            src={translate}
            alt="translate"
            style={{ marginRight: "10px" }}
          />
          <Typography
            fontFamily="Gilroy"
            fontSize="12px"
            fontWeight="400"
            lineHeight="17px"
            letterSpacing="0.01em"
            textAlign="left"
            color="#242429"
            marginRight="25px"
          >
            {"Translate this review"}
          </Typography>
        </Box>

        <Box>
          <Button
            icon={favIcon}
            onClick={() => {}}
            text="Like"
            variant="primary"
            width="105px"
            justifyContent="space-between"
          />
        </Box>
      </Box>
    </Box>
  );
};

const comments = [
  {
    profilePicture: profilePicture_1,
    name: "Oksana Roma",
    location: "United Kingdom",
    rating: 4,
    title: "Beautiful Mosque in the world",
    description:
      "Another fantastic place to visit if you are into your history (or not). Amazing views from the outside and brilliant architectures in the inside. Looks even more amazing in the night with the lightings.",
    attachments: [],
    publishDate: "1 week ago",
    likes: 2800,
    locale: "en",
  },
  {
    profilePicture: profilePicture_2,
    name: "Fathima Mohamed",
    location: "Istanbul, Turkey",
    rating: 3,
    title: "Beautiful Mosque in the world",
    description:
      "Another fantastic place to visit if you are into your history (or not). Amazing views from the outside and brilliant architectures in the inside. Looks even more amazing in the night with the lightings.",
    attachments: [
      { logo: picture_2_1 },
      { logo: picture_2_2 },
      { logo: picture_2_3 },
      { logo: picture_2_4 },
      { logo: picture_2_5 },
    ],
    publishDate: "2 week ago",
    likes: 0,
    locale: "en",
  },
  {
    profilePicture: profilePicture_2,
    name: "Muhammad Aziz",
    location: "Istanbul, Turkey",
    rating: 3,
    title: "Beautiful Mosque in the world",
    description:
      "Both the interior and exterior of Hagia Sophia are stunning and must be visited. However turning it back into a mosque has severely limited access and makes the experience less rewarding. The queues during the day can be incredibly long and slow moving (even though it's only to get through security), meaning you may have to wait a couple of hours to get in. We came back at 5.30 and queued for about 15 minutes, which was a much better experience, although we were inside for about ten minutes when we were told to clear the main space for prayers. You can no longer go up into the gallery, which is an amazing experience, and some of the beautiful Byzantine mosaics have been covered up with",
    attachments: [],
    publishDate: "1 week ago",
    likes: 28000,
    locale: "en",
  },
  {
    profilePicture: profilePicture_2,
    name: "Waloeed Shabbir",
    location: "Istanbul, Turkey",
    rating: 5,
    title: "دنیا کی خوبصورت مسجد",
    description:
      "اگر آپ اپنی تاریخ میں ہیں (یا نہیں) تو دیکھنے کے لیے ایک اور شاندار جگہ۔ باہر سے حیرت انگیز نظارے اور اندر سے شاندار فن تعمیر۔ روشنیوں کے ساتھ رات میں اور بھی حیرت انگیز لگتا ہے۔",
    attachments: [],
    publishDate: "23 week ago",
    likes: 2500,
    locale: "ar",
  },
];
