Not sure if I should add Form control for the select option

 <FormControl>
          <InputLabel htmlFor="“experienceLevel-select">
            Are you at least 18 years of age? (Must be over 18 to register)
          </InputLabel>
          <Controller
            control={control}
            name="“experienceLevel”"
            as={
              <Select id="“experienceLevel-select">
                <MenuItem value={0}>Yes</MenuItem>
                <MenuItem value={6}>No</MenuItem>
              </Select>
            }
          />
        </FormControl>