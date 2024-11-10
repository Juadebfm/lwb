import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Tooltip,
} from "@material-tailwind/react";
import PropTypes from "prop-types";

export function ProfileCard({
  name,
  position,
  profileImage,
  socialLinks = [],
}) {
  return (
    <Card className="w-96 shadow-lg">
      <CardHeader floated={false} className="h-80">
        <img
          src={profileImage}
          alt={`${name}'s profile`}
          className="object-cover object-top w-full h-full"
        />
      </CardHeader>
      <CardBody className="text-center">
        <Typography variant="h4" color="blue-gray" className="mb-2">
          {name}
        </Typography>
        <Typography color="blue-gray" className="font-medium" textGradient>
          {position}
        </Typography>
      </CardBody>
      <CardFooter className="flex justify-center gap-7 pt-2">
        {socialLinks.map(({ platform, url, IconComponent, color }, index) => (
          <Tooltip key={index} content={`Follow on ${platform}`}>
            <Typography
              as="a"
              href={url}
              variant="lead"
              color={color}
              textGradient
            >
              <IconComponent
                size={24}
                className="text-lwb_black hover:bg-lwb_black hover:text-white transition duration-300 ease-in-out rounded-full"
              />
              {/* Render Lucide icon component */}
            </Typography>
          </Tooltip>
        ))}
      </CardFooter>
    </Card>
  );
}

// Define prop types for validation
ProfileCard.propTypes = {
  name: PropTypes.string.isRequired,
  position: PropTypes.string.isRequired,
  profileImage: PropTypes.string.isRequired,
  socialLinks: PropTypes.arrayOf(
    PropTypes.shape({
      platform: PropTypes.string.isRequired,
      url: PropTypes.string.isRequired,
      IconComponent: PropTypes.elementType.isRequired, // expects a React component
      color: PropTypes.string.isRequired,
    })
  ),
};
