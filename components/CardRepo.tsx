import { StarIcon } from "@chakra-ui/icons";
import {
  Badge,
  Box,
  Card,
  CardBody,
  CardHeader,
  Link,
  Text,
} from "@chakra-ui/react";
import { useRouter } from "next/router";

const CardRepo = ({name,stars,primaryLanguage}:any) => {
  const {push} = useRouter()

  const navigate = (path:string) => {
    push({
      pathname:`/repo/${path}`
    })
  }

  return (
    <Card width='100%'>
      <CardHeader gap='5px' display='flex' alignItems='center'>
        <Link onClick={()=>navigate(name)} fontSize='2xl' width='max-content'>
          {name}
        </Link>
        <Box display='flex' alignItems='center'>
          <StarIcon />
          <Text>{stars.totalCount ? stars.totalCount : ''}</Text>
        </Box>
      </CardHeader>

      <CardBody>
        {!!primaryLanguage && <Badge
          variant='subtle'
          sx={{
            background: primaryLanguage.color,
          }}
          width='max-content'
        >
          {primaryLanguage.name}
        </Badge>}
      </CardBody>
    </Card>
  );
};

export default CardRepo;
