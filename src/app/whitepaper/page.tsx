"use client";

import React, { useState } from "react";
import {
  useMediaQuery,
  Box,
  Typography,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Card,
  CardContent,
} from "@mui/material";

function CopyableText({ text }: { text: string }) {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <span className="bg-gray-800 px-2 py-1 rounded text-sm cursor-pointer" onClick={handleCopy}>
      {text} {copied && <span className="text-green-500">(Copied!)</span>}
    </span>
  );
}

export default function WhitepaperPage() {
  const isMobile = useMediaQuery("(max-width:920px)");

  return (
    <Box
      sx={{
        minHeight: "100vh",
        background: "linear-gradient(to bottom right, #0a0a23, #181830, #1a1a40)",
        color: "white",
        p: { xs: 2, sm: 3, md: 4 },
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <Box
        sx={{
          maxWidth: "1200px",
          width: "100%",
          background: "rgba(255, 255, 255, 0.1)",
          border: "1px solid #4a4a4a",
          borderRadius: 2,
          boxShadow: 3,
          p: { xs: 3, sm: 4, md: 5 },
          mt: { xs: 3, sm: 4, md: 5 },
          mb: { xs: 3, sm: 4, md: 5 },
        }}
      >
        <Typography
          variant="h4"
          component="h1"
          align="center"
          sx={{
            fontWeight: "bold",
            color: "#FFD600",
            mb: { xs: 2, sm: 3, md: 4 },
            textShadow: "0px 0px 10px rgba(255, 214, 0, 0.8)",
          }}
        >
          ANTCO Whitepaper
        </Typography>
        <Typography
          variant="h5"
          component="h2"
          align="center"
          sx={{
            fontWeight: "bold",
            color: "#FFD600",
            mt: { xs: 3, sm: 4, md: 5 },
            mb: { xs: 2, sm: 3, md: 4 },
            textShadow: "0px 0px 10px rgba(255, 214, 0, 0.8)",
          }}
        >
          🔢 ANTCO Tokenomics: Distribution and Allocation
        </Typography>
        <Typography variant="body1" align="center" sx={{ mb: { xs: 2, sm: 3, md: 4 } }}>
          The ANTCO token features a strategically balanced distribution model designed to foster sustainable growth, empower the developer community,
          and support long-term project scalability. Below is the breakdown of the total supply and its respective allocation:
        </Typography>
        <Typography variant="h6" align="center" sx={{ fontWeight: "bold", mt: { xs: 2, sm: 3, md: 4 }, mb: { xs: 2, sm: 3, md: 4 } }}>
          Total Supply: 7,770,000,000 ANTCO
        </Typography>
        {isMobile ? (
          <Box sx={{ display: "grid", gap: 2 }}>
            {/* Card layout for mobile */}
            <Card sx={{ background: "#1a1a40", border: "1px solid #4a4a4a" }}>
              <CardContent sx={{ color: "white" }}>
                <Typography variant="h6" sx={{ color: "#FFD600", mb: 1 }}>
                  Development Team
                </Typography>
                <Typography variant="body2" sx={{ mb: 1, color: "white" }}>
                  <b>Percentage:</b> 10%
                </Typography>
                <Typography variant="body2" sx={{ mb: 1, color: "white" }}>
                  <b>Tokens:</b> 777,000,000 ANTCO
                </Typography>
                <Typography variant="body2" sx={{ color: "white" }}>
                  Reserved for the core team and long-term contributors, supporting ongoing development, maintenance, and ecosystem growth. Tokens are
                  subject to a vesting schedule.
                </Typography>
              </CardContent>
            </Card>
            <Card sx={{ background: "#1a1a40", border: "1px solid #4a4a4a" }}>
              <CardContent sx={{ color: "white" }}>
                <Typography variant="h6" sx={{ color: "#FFD600", mb: 1 }}>
                  Marketing & Listings
                </Typography>
                <Typography variant="body2" sx={{ mb: 1, color: "white" }}>
                  <b>Percentage:</b> 5%
                </Typography>
                <Typography variant="body2" sx={{ mb: 1, color: "white" }}>
                  <b>Tokens:</b> 388,500,000 ANTCO
                </Typography>
                <Typography variant="body2" sx={{ color: "white" }}>
                  Allocated for marketing campaigns, exchange listing fees, influencer partnerships, and community outreach to boost awareness
                  globally.
                </Typography>
              </CardContent>
            </Card>
            <Card sx={{ background: "#1a1a40", border: "1px solid #4a4a4a" }}>
              <CardContent sx={{ color: "white" }}>
                <Typography variant="h6" sx={{ color: "#FFD600", mb: 1 }}>
                  Project Treasury
                </Typography>
                <Typography variant="body2" sx={{ mb: 1, color: "white" }}>
                  <b>Percentage:</b> 5%
                </Typography>
                <Typography variant="body2" sx={{ mb: 1, color: "white" }}>
                  <b>Tokens:</b> 388,500,000 ANTCO
                </Typography>
                <Typography variant="body2" sx={{ color: "white" }}>
                  Funds future ecosystem development, including dApps under the AntCoders brand, ensuring financial flexibility and rapid execution of
                  ideas.
                </Typography>
              </CardContent>
            </Card>
            <Card sx={{ background: "#1a1a40", border: "1px solid #4a4a4a" }}>
              <CardContent sx={{ color: "white" }}>
                <Typography variant="h6" sx={{ color: "#FFD600", mb: 1 }}>
                  Initial Liquidity Pool
                </Typography>
                <Typography variant="body2" sx={{ mb: 1, color: "white" }}>
                  <b>Percentage:</b> 55%
                </Typography>
                <Typography variant="body2" sx={{ mb: 1, color: "white" }}>
                  <b>Tokens:</b> 4,273,500,000 ANTCO
                </Typography>
                <Typography variant="body2" sx={{ color: "white" }}>
                  Locked in decentralized liquidity pools like Raydium to enable smooth, low-slippage trading. A portion has been burned to enhance
                  liquidity stability. Pool Address: <CopyableText text="GpMZbSM2GgvTKHJirzeGfMFoaZ8UR2X7F4v8vHTvxFbL" />
                </Typography>
              </CardContent>
            </Card>
            <Card sx={{ background: "#1a1a40", border: "1px solid #4a4a4a" }}>
              <CardContent sx={{ color: "white" }}>
                <Typography variant="h6" sx={{ color: "#FFD600", mb: 1 }}>
                  Community & Airdrops
                </Typography>
                <Typography variant="body2" sx={{ mb: 1, color: "white" }}>
                  <b>Percentage:</b> 15%
                </Typography>
                <Typography variant="body2" sx={{ mb: 1, color: "white" }}>
                  <b>Tokens:</b> 1,165,500,000 ANTCO
                </Typography>
                <Typography variant="body2" sx={{ color: "white" }}>
                  Rewards early supporters, developers, and engaged users through airdrops, contests, and ambassador programs to foster organic
                  adoption.
                </Typography>
              </CardContent>
            </Card>
            <Card sx={{ background: "#1a1a40", border: "1px solid #4a4a4a" }}>
              <CardContent sx={{ color: "white" }}>
                <Typography variant="h6" sx={{ color: "#FFD600", mb: 1 }}>
                  Strategic Reserve
                </Typography>
                <Typography variant="body2" sx={{ mb: 1, color: "white" }}>
                  <b>Percentage:</b> 10%
                </Typography>
                <Typography variant="body2" sx={{ mb: 1, color: "white" }}>
                  <b>Tokens:</b> 777,000,000 ANTCO
                </Typography>
                <Typography variant="body2" sx={{ color: "white" }}>
                  Held for future collaborations, partnerships, and potential fundraising opportunities, enabling onboarding of strategic allies and
                  institutional supporters.
                </Typography>
              </CardContent>
            </Card>
          </Box>
        ) : (
          <TableContainer component={Paper} sx={{ background: "#1a1a40" }}>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell sx={{ color: "#FFD600", fontWeight: "bold" }}>Category</TableCell>
                  <TableCell sx={{ color: "#FFD600", fontWeight: "bold" }}>Percentage</TableCell>
                  <TableCell sx={{ color: "#FFD600", fontWeight: "bold" }}>Tokens</TableCell>
                  <TableCell sx={{ color: "#FFD600", fontWeight: "bold" }}>Description</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                <TableRow sx={{ color: "white" }}>
                  <TableCell sx={{ color: "white" }}>Development Team</TableCell>
                  <TableCell sx={{ color: "white" }}>10%</TableCell>
                  <TableCell sx={{ color: "white" }}>777,000,000 ANTCO</TableCell>
                  <TableCell sx={{ color: "white" }}>
                    Reserved for the core team and long-term contributors, supporting ongoing development, maintenance, and ecosystem growth. Tokens
                    are subject to a vesting schedule.
                  </TableCell>
                </TableRow>
                <TableRow sx={{ color: "white" }}>
                  <TableCell sx={{ color: "white" }}>Marketing & Listings</TableCell>
                  <TableCell sx={{ color: "white" }}>5%</TableCell>
                  <TableCell sx={{ color: "white" }}>388,500,000 ANTCO</TableCell>
                  <TableCell sx={{ color: "white" }}>
                    Allocated for marketing campaigns, exchange listing fees, influencer partnerships, and community outreach to boost awareness
                    globally.
                  </TableCell>
                </TableRow>
                <TableRow sx={{ color: "white" }}>
                  <TableCell sx={{ color: "white" }}>Project Treasury</TableCell>
                  <TableCell sx={{ color: "white" }}>5%</TableCell>
                  <TableCell sx={{ color: "white" }}>388,500,000 ANTCO</TableCell>
                  <TableCell sx={{ color: "white" }}>
                    Funds future ecosystem development, including dApps under the AntCoders brand, ensuring financial flexibility and rapid execution
                    of ideas.
                  </TableCell>
                </TableRow>
                <TableRow sx={{ color: "white" }}>
                  <TableCell sx={{ color: "white" }}>Initial Liquidity Pool</TableCell>
                  <TableCell sx={{ color: "white" }}>55%</TableCell>
                  <TableCell sx={{ color: "white" }}>4,273,500,000 ANTCO</TableCell>
                  <TableCell sx={{ color: "white" }}>
                    Locked in decentralized liquidity pools like Raydium to enable smooth, low-slippage trading. A portion has been burned to enhance
                    liquidity stability. Pool Address: <CopyableText text="GpMZbSM2GgvTKHJirzeGfMFoaZ8UR2X7F4v8vHTvxFbL" />
                  </TableCell>
                </TableRow>
                <TableRow sx={{ color: "white" }}>
                  <TableCell sx={{ color: "white" }}>Community & Airdrops</TableCell>
                  <TableCell sx={{ color: "white" }}>15%</TableCell>
                  <TableCell sx={{ color: "white" }}>1,165,500,000 ANTCO</TableCell>
                  <TableCell sx={{ color: "white" }}>
                    Rewards early supporters, developers, and engaged users through airdrops, contests, and ambassador programs to foster organic
                    adoption.
                  </TableCell>
                </TableRow>
                <TableRow sx={{ color: "white" }}>
                  <TableCell sx={{ color: "white" }}>Strategic Reserve</TableCell>
                  <TableCell sx={{ color: "white" }}>10%</TableCell>
                  <TableCell sx={{ color: "white" }}>777,000,000 ANTCO</TableCell>
                  <TableCell sx={{ color: "white" }}>
                    Held for future collaborations, partnerships, and potential fundraising opportunities, enabling onboarding of strategic allies and
                    institutional supporters.
                  </TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </TableContainer>
        )}
      </Box>
    </Box>
  );
}
