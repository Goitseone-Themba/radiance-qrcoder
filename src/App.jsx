import { useState } from 'react'
import { Box, Button, TextField, Typography, Stack } from '@mui/material'
import QRCode from 'qrcode.react'
function App() {
    const [data, setData] = useState("")
    console.log(data)

  return (
    <>
      <Stack spacing={4} alignItems={'center'} marginTop='120px'>
        <Typography variant={'h4'}>Radiance QR code generator</Typography>
        <TextField
            variant='filled'
            Label={'Input'}
            type='text'
            value={data}
            onChange={(e) => setData(e.target.value)}
            sx={{width: '480px'}}
        />
        <Box>
          <QRCode value={data} size={360}/>
        </Box>
      </Stack>  
    </>)
}

export default App
