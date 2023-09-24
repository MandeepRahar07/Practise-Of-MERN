import { Box, Heading, Flex,Text , Image , Accordion,
    AccordionItem,
    AccordionButton,
    AccordionPanel,
    AccordionIcon} from "@chakra-ui/react"


const Description =()=>{
    return (
        <Box alignItems="center" justifyContent="center" height="100vh">
        <Flex direction={{ base: "column", md: "row" }}>
{/* .........................................box for description and image............................................ */}
            <Box  >
                  {/* ........................................Description ..................................... */}
                    <Box  p={6} width = "90%" height="60%" >
                        <Heading mb={4} fontSize='4xl' textAlign='left' >
                        How to install windows 10 ?
                        </Heading>
                        <Text fontSize='l' textAlign='left' >
                        Installing Windows 10 on a computer typically involves several steps. Please note that the process may vary slightly depending on your specific computer's manufacturer and configuration. 
                         Backup Data: Ensure you have a backup of all your important data on an external storage device or cloud service, as the installation process may involve formatting your drive, which can result in data loss.
                         Windows 10 Installation Media: You will need a bootable Windows 10 installation USB drive or DVD. You can create one using the official Media Creation Tool from Microsoft's website. You'll also need a valid Windows 10 product key.
                         <br></br>
                        Create Windows 10 Installation Media
                        <br></br>Create Windows 10 Installation Media - Insert Installation Media - Boot from Installation Media - Windows Setup - Install Windows - Choose Installation Type - Installation Process - Create a User Account - Final Setup - Install Drivers and Software - Windows Update - Activation 
                         
                        </Text>

                        <Heading mb={4} fontSize='4xl' textAlign='left' mt={10}>
                        How to setup office 365 ?
                        </Heading>
                        <Text fontSize='l' textAlign='left' >
                        Setting up Office 365 involves several steps, including creating an Office 365 account, configuring your domain, and installing Office applications. Here's a general guide on how to set up Office 365:
                        <br></br>
                        Purchase an Office 365 Subscription - Sign Up for an Office 365 Account -  Add and Verify Your Domain - Configure DNS Records -  Set Up User Accounts - Install Office Applications - Configure Email - Migrate Data (if applicable) -  Configure Security Settings - Training and Support - Regular Maintenance
                        </Text>
                    </Box>

            {/* ..........................................Image................................................ */}
            <Box p={6}   width = "80%" height="500%" mt = {50}> 
            <Image
               src={require('./image/helo.png')}
                alt="blog"
                height="10%"
                width="100%"
                maxH="300px"
            />


             </Box>

                </Box>
{/* .........................................box for qus and ans............................................ */}
<Box flex={{ base: "1" }} mt={{ base: 10, md: 0 }}>
              
              <Accordion defaultIndex={[0]} allowMultiple>

                     <AccordionItem>
                         <h1>
                         <AccordionButton>
                             <Box as="span" flex='5' textAlign='left'>
                             <h2 style={{ fontSize: '1rem' }}>  Frequently Asked Questions</h2>
                             </Box>
                             <AccordionIcon />
                         </AccordionButton>
                         </h1>
                         <AccordionPanel pb={4}>
                      
                         <AccordionItem>
                     <h2>
                     <AccordionButton>
                         <Box as="span" flex='1' textAlign='left'>
                         <h2 style={{ fontSize: '1rem' }}>What Is Windows 10?</h2>
                         </Box>
                         <AccordionIcon />
                     </AccordionButton>
                     </h2>
                     <AccordionPanel pb={4}>
                     <Box as="span" flex='1' textAlign='left'>
                         <h2 style={{ fontSize: '1rem' }}>Windows 10 is an operating system developed by Microsoft. 
                         It is the successor to Windows 8.1 and was first released in July 2015. Windows 10 is designed to provide a familiar and user-friendly experience while offering new features and improvements over its predecessors.
                         </h2>
                         </Box>
                     </AccordionPanel>
                 </AccordionItem>

                 <AccordionItem>
                     <h2>
                     <AccordionButton>
                         <Box as="span" flex='1' textAlign='left'>
                         <h2 style={{ fontSize: '1rem' }}>What Are the System Requirements for Windows 10?</h2>
                         </Box>
                         <AccordionIcon />
                     </AccordionButton>
                     </h2>
                     <AccordionPanel pb={4}>
                     <Box as="span" flex='1' textAlign='left'>
                         <h2 style={{ fontSize: '1rem' }}> The specific system requirements for Windows 10 can vary based on the version and edition you intend to install. 
                         However, the minimum requirements for Windows 10 typically include a 1 GHz or faster processor, 1 GB of RAM for 32-bit systems or 2 GB for 64-bit systems, 16 GB of storage for 32-bit systems or 20 GB for 64-bit systems, and a DirectX 9 or later graphics card.
                         </h2>
                         </Box>
                     </AccordionPanel>
                 </AccordionItem>
                 <AccordionItem>
                     <h2>
                     <AccordionButton>
                         <Box as="span" flex='1' textAlign='left'>
                         <h2 style={{ fontSize: '1rem' }}>How Do I Upgrade to Windows 10 from a Previous Version of Windows?</h2>
                         </Box>
                         <AccordionIcon />
                     </AccordionButton>
                     </h2>
                     <AccordionPanel pb={4}>
                     <Box as="span" flex='1' textAlign='left'>
                         <h2 style={{ fontSize: '1rem' }}> You can upgrade to Windows 10 from Windows 7 or Windows 8.1 if your PC meets the system requirements. Microsoft offered a free upgrade to Windows 10 for eligible devices during the initial release period. 
                         To upgrade, you could use the "Get Windows 10" app or download the Media Creation Tool from Microsoft's website.</h2>
                         </Box>
                     </AccordionPanel>
                 </AccordionItem>

                 <AccordionItem>
                     <h2>
                     <AccordionButton>
                         <Box as="span" flex='1' textAlign='left'>
                         <h2 style={{ fontSize: '1rem' }}> What Are Some Key Features of Windows 10?</h2>
                         </Box>
                         <AccordionIcon />
                     </AccordionButton>
                     </h2>
                     <AccordionPanel pb={4}>
                     <Box as="span" flex='1' textAlign='left'>
                         <h2 style={{ fontSize: '1rem' }}>Windows 10 introduced several notable features, including the Start Menu (a combination of the Windows 7 Start Menu and Windows 8 Start Screen), Microsoft Edge web browser, Cortana digital assistant, virtual desktops, improved security features like Windows Defender,
                          and the ability to run Universal Windows Platform (UWP) apps.</h2>
                         </Box>
                     </AccordionPanel>
                 </AccordionItem>
                 <AccordionItem>
                     <h2>
                     <AccordionButton>
                         <Box as="span" flex='1' textAlign='left'>
                         <h2 style={{ fontSize: '1rem' }}>How Do I Perform a Windows Update in Windows 10?</h2>
                         </Box>
                         <AccordionIcon />
                     </AccordionButton>
                     </h2>
                     <AccordionPanel pb={4}>
                     <Box as="span" flex='1' textAlign='left'>
                         <h2 style={{ fontSize: '1rem' }}>To perform a Windows Update in Windows 10, go to "Settings" > "Update & Security" > "Windows Update." Click on "Check for updates," 
                         and Windows will check for available updates and prompt you to install them.</h2>
                         </Box>
                     </AccordionPanel>
                 </AccordionItem>

                 <AccordionItem>
                     <h2>
                     <AccordionButton>
                         <Box as="span" flex='1' textAlign='left'>
                         <h2 style={{ fontSize: '1rem' }}> What Is the Difference Between Windows 10 Home and Windows 10 Pro?</h2>
                         </Box>
                         <AccordionIcon />
                     </AccordionButton>
                     </h2>
                     <AccordionPanel pb={4}>
                     <Box as="span" flex='1' textAlign='left'>
                         <h2 style={{ fontSize: '1rem' }}>Windows 10 Home is designed for consumers and provides essential features for everyday use. Windows 10 Pro, 
                         on the other hand, is aimed at businesses and professionals, offering additional features like BitLocker encryption, Remote Desktop, and group policy management.</h2>
                         </Box>
                     </AccordionPanel>
                 </AccordionItem>

                 <AccordionItem>
                     <h2>
                     <AccordionButton>
                         <Box as="span" flex='1' textAlign='left'>
                         <h2 style={{ fontSize: '1rem' }}>How Do I Reset Windows 10 to Its Factory Settings?</h2>
                         </Box>
                         <AccordionIcon />
                     </AccordionButton>
                     </h2>
                     <AccordionPanel pb={4}>
                     <Box as="span" flex='1' textAlign='left'>
                         <h2 style={{ fontSize: '1rem' }}>To reset Windows 10 to its factory settings, go to "Settings" - "Update & Security" -
                          "Recovery." Under "Reset this PC," click "Get started" and choose between keeping your files or removing everything. Follow the on-screen instructions to complete the reset.
                         </h2>
                         </Box>
                     </AccordionPanel>
                 </AccordionItem>


                         </AccordionPanel>
                     </AccordionItem>




               
                 </Accordion>
         </Box>


            </Flex>
            
        </Box>
    )
}

export default Description;