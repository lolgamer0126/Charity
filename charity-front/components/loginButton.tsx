import { Button, Icon } from "@chakra-ui/react";

const LoginWithGoogle = () => {
    return (
        <div className="login-button">
        <a href="http://localhost:8000/auth/google">
            <Button
            py={2}
            w="full"
            colorScheme="blue"
            leftIcon={
              <Icon
                mr={1}
                aria-hidden="true"
                boxSize={6}
                viewBox="0 0 24 24"
                fill="currentColor"
                stroke="transparent"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M20.283,10.356h-8.327v3.451h4.792c-0.446,2.193-2.313,3.453-4.792,3.453c-2.923,0-5.279-2.356-5.279-5.28	c0-2.923,2.356-5.279,5.279-5.279c1.259,0,2.397,0.447,3.29,1.178l2.6-2.599c-1.584-1.381-3.615-2.233-5.89-2.233	c-4.954,0-8.934,3.979-8.934,8.934c0,4.955,3.979,8.934,8.934,8.934c4.467,0,8.529-3.249,8.529-8.934	C20.485,11.453,20.404,10.884,20.283,10.356z" />
              </Icon>
              }
            >
            Google аккоунтаар нэвтрэх
          </Button>
        </a>
        </div>
    );
}
export default LoginWithGoogle;
